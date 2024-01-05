import {
  Backdrop,
  Button,
  CircularProgress,
  Grid,
  Link,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { useRegisterUser } from '../../_actions/users.actions';
import BadgeIcon from '@mui/icons-material/Badge';
import DataObjectIcon from '@mui/icons-material/DataObject';
import PersonIcon from '@mui/icons-material/Person';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import styles from './styles';

const SignUpForm = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();
  const { loading, post } = useRegisterUser();

  const handleRedirectToLogin = useCallback(() => {
    navigate('/login');
  }, [navigate]);

  const onSubmit = useCallback(
    (data, e) => {
      e.preventDefault();
      post(data, handleRedirectToLogin);
    },
    [handleRedirectToLogin, post]
  );

  return (
    <>
      <Backdrop
        open={loading}
        sx={styles.Backdrop}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
      <Grid
        component='form'
        container
        onSubmit={handleSubmit(onSubmit)}
        spacing={4}
        sx={styles.RegisterForm}
      >
        <Link
          component={ReactRouterLink}
          ml='auto'
          mr='auto'
          to='/'
        >
          <DataObjectIcon sx={styles.LogoIcon} />
        </Link>
        <Grid
          item
          xs={12}
          sx={styles.GridItem}
        >
          <Typography
            align='center'
            variant='h1'
          >
            Create Account
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={styles.GridItem}
        >
          <Controller
            control={control}
            name='first_name'
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label='First Name'
                onChange={onChange}
                variant='outlined'
                value={value}
                InputLabelProps={{
                  shrink: true
                }}
                InputProps={{
                  endAdornment: <BadgeIcon color='primary' />
                }}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: 'First name is required' }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={styles.GridItem}
        >
          <Controller
            control={control}
            name='last_name'
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label='Last Name'
                onChange={onChange}
                variant='outlined'
                value={value}
                InputLabelProps={{
                  shrink: true
                }}
                InputProps={{
                  endAdornment: <BadgeIcon color='primary' />
                }}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: 'Last name is required' }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={styles.GridItem}
        >
          <Controller
            control={control}
            name='user_name'
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label='Username'
                onChange={onChange}
                variant='outlined'
                value={value}
                InputLabelProps={{
                  shrink: true
                }}
                InputProps={{
                  endAdornment: <PersonIcon color='primary' />
                }}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{
              required: 'Username is required',
              maxLength: { value: 20, message: 'Username cannot exceed 20 characters' }
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={styles.GridItem}
        >
          <Controller
            control={control}
            name='password'
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label='Password'
                onChange={onChange}
                variant='outlined'
                value={value}
                InputLabelProps={{
                  shrink: true
                }}
                InputProps={{
                  endAdornment: <KeyOutlinedIcon color='primary' />
                }}
                error={!!error}
                helperText={
                  error
                    ? error.message
                    : 'Password must have a minimum of 8 characters with at least 1 uppercase, 1 lowercase, 1 number, and 1 special character'
                }
                type='password'
              />
            )}
            rules={{
              required: 'Password is required',
              minLength: { value: 8, message: 'Password must be at least 8 characters in length' },
              pattern: {
                value: new RegExp(
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
                ),
                message:
                  'Password must have a minimum of 8 characters with at least 1 uppercase, 1 lowercase, 1 number, and 1 special character'
              }
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={styles.GridItem}
        >
          <Stack
            direction='column'
            justifyContent='flex-start'
            alignItems='center'
            spacing={2}
            sx={styles.RegisterCtas}
          >
            <Button
              type='submit'
              variant='contained'
              sx={styles.RegisterBtn}
            >
              Register
            </Button>
            <Typography variant='body2'>
              Already have an account?{' '}
              <Link
                component={ReactRouterLink}
                to='/login'
              >
                Login
              </Link>
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default SignUpForm;

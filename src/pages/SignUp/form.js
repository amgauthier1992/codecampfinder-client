import { Button, Grid, Link, Stack, TextField, Typography } from '@mui/material';
import { useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Link as ReactRouterLink } from 'react-router-dom';
import styles from './styles';

import BadgeIcon from '@mui/icons-material/Badge';
import DataObjectIcon from '@mui/icons-material/DataObject';
import PersonIcon from '@mui/icons-material/Person';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';

const SignUpForm = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = useCallback((data, e) => {
    console.log(data, e);
  }, []);

  return (
    <>
      <Grid
        component='form'
        container
        onSubmit={handleSubmit(onSubmit)}
        spacing={1}
        sx={styles.RegisterForm}
      >
        <DataObjectIcon sx={styles.LogoIcon} />
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
            name='firstName'
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
            name='lastName'
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
            name='username'
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

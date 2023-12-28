import { Button, Grid, Link, Stack, TextField, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useCallback } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import DataObjectIcon from '@mui/icons-material/DataObject';
import PersonIcon from '@mui/icons-material/Person';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import styles from './styles';

const LoginForm = () => {
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
        spacing={4}
        sx={styles.LoginForm}
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
            Sign In
          </Typography>
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
              required: 'Username is required'
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
                helperText={error ? error.message : null}
                type='password'
              />
            )}
            rules={{
              required: 'Password is required'
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
            sx={styles.LoginCtas}
          >
            <Button
              type='submit'
              variant='contained'
              sx={styles.LoginBtn}
            >
              Log in
            </Button>
            <Typography variant='body2'>
              {`Don't have an account?`}{' '}
              <Link
                component={ReactRouterLink}
                to='/sign-up'
              >
                Sign Up
              </Link>
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginForm;

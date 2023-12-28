import { Container, Paper } from '@mui/material';
import LoginForm from './form';
import styles from './styles';

const Login = () => {
  return (
    <Container
      maxWidth='xxl'
      sx={styles.Container}
    >
      <Paper sx={styles.FormCard}>
        <LoginForm />
      </Paper>
    </Container>
  );
};

export default Login;

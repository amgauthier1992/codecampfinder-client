import { Container } from '@mui/material';
import { useIsDesktop } from '../../_helpers/breakpoint';
import SignUpForm from '../../components/SignUpForm';
import styles from './styles';
import './styles.css';

const imageStyles = {
  width: '675px',
  height: '675px',
};

const SignUp = () => {
  const isDesktop = useIsDesktop();

  if (isDesktop) {
    imageStyles.width = '750px';
    imageStyles.height = '750px';
  }

  return (
    <Container
      maxWidth='xxl'
      sx={styles.Container}
    >
      {isDesktop && (
        <img
          alt='Woman sitting at desk coding'
          className='signup-img'
          src={require('../../images/sign-up.png')}
        />
      )}
      <SignUpForm />
    </Container>
  );
};

export default SignUp;

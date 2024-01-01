import { Button, Container, Stack, Typography } from '@mui/material';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { useIsMobile } from '../../_helpers/breakpoint';

import styles from './styles';

const Unauthorized = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const navigateHome = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const navigateToLogin = useCallback(() => {
    navigate('/login');
  }, [navigate]);

  return (
    <Container sx={styles.Container}>
      <Stack
        direction='column'
        spacing={4}
      >
        <Typography
          variant='h1'
          color='primary.main'
          fontWeight={800}
          fontSize={isMobile ? '40px' : '48px'}
        >
          {'<> 401: Unauthorized </>'}
        </Typography>
        <Typography
          variant='body1'
          sx={styles.Content}
        >
          {`You do not have permission to access the requested page. If you haven't yet created an account you will need to do this beforehand. Otherwise, you may need to log back in to re-authenticate yourself.`}
        </Typography>
        <Stack
          direction='row'
          justifyContent={isMobile ? 'center' : 'flex-start'}
          spacing={2}
        >
          <Button
            onClick={navigateHome}
            variant='contained'
            sx={styles.Cta}
          >
            Back to Home
          </Button>
          <Button
            onClick={navigateToLogin}
            variant='outlined'
            sx={styles.Cta}
          >
            Login
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Unauthorized;

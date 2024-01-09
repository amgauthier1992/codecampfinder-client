import { Button, Container, Stack, Typography } from '@mui/material';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { useIsMobile } from '../../_helpers/breakpoint';

import styles from './styles';

const NotFound = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const navigateHome = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <Container
      maxWidth='xxl'
      sx={styles.Container}
    >
      <Stack
        direction='column'
        justifyContent='center'
        alignItems='flex-start'
        spacing={4}
        sx={styles.ContentWrapper}
      >
        <Typography
          variant='h1'
          color='primary.main'
          fontWeight={800}
          fontSize={isMobile ? '40px' : '48px'}
        >
          {'404: Page Not Found'}
        </Typography>
        <Typography
          variant='body1'
          sx={styles.Content}
        >
          The page you’re trying to access doesn’t exist. If you typed the url manually, please
          double-check your spelling. Otherwise, navigate back to the home page by using the button
          below.
        </Typography>
        <Stack
          direction='row'
          justifyContent='center'
          sx={styles.CtaWrapper}
        >
          <Button
            onClick={navigateHome}
            variant='contained'
            sx={styles.Cta}
          >
            Home
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default NotFound;

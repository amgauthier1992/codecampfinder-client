import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';

import styles from './styles';

export default function NotFoundPage() {
  const navigate = useNavigate();

  const navigateHome = useCallback(() => {
    navigate('/');
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
          fontSize='48px'
        >
          {'<> 404: Page Not Found </>'}
        </Typography>
        <Typography
          variant='body1'
          sx={styles.Content}
        >
          The page you’re trying to access doesn’t exist. If you typed the url manually, please
          double-check your spelling. Otherwise, navigate back to the home page by using the button
          below.
        </Typography>
        <Box sx={styles.CtaWrapper}>
          <Button
            onClick={navigateHome}
            variant='contained'
            sx={styles.Cta}
          >
            Back to Home
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}

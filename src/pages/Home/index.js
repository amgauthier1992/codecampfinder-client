import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import { Box, Button, Stack, Typography } from '@mui/material';
import { Link as ReactRouterLink } from 'react-router-dom';
import styles from './styles';
import theme from '../../theme';

const Home = () => {
  return (
    <>
      <Header />
      <Stack
        direction='column'
        spacing={2}
        sx={styles.ContentWrapper(theme)}
      >
        <Typography
          variant='h2'
          fontWeight={800}
          sx={styles.ContentTitle}
        >
          Begin your Coding Journey
        </Typography>
        <Typography
          variant='body2'
          fontWeight={400}
        >
          Explore some of most popular coding bootcamps and their course offerings. Curate a list of
          courses based on your individual needs and goals.
        </Typography>
        <Button
          component={ReactRouterLink}
          to='/sign-up'
          sx={styles.Cta}
          variant='contained'
        >
          Start Here
        </Button>
      </Stack>
      <Box sx={styles.ImgWrapper}>
        <Box
          alt='Man sitting at desk using desktop comnputer'
          component='img'
          src={`${process.env.PUBLIC_URL}/codecamp.jpg`}
          sx={styles.Image}
        />
      </Box>
      <Footer />
    </>
  );
};

export default Home;

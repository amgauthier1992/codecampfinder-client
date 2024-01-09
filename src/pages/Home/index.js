import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import { Button, Stack, Typography } from '@mui/material';
import { Link as ReactRouterLink } from 'react-router-dom';
import styles from './styles';

const Home = () => {
  return (
    <>
      <Header />
      <Stack
        direction='column'
        justifyContent='center'
        spacing={2}
        sx={styles.MiddleWell}
      >
        <Stack
          direction='column'
          spacing={3}
          sx={styles.ContentWrapper}
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
            sx={styles.ContentPreface}
          >
            Explore some of most popular coding bootcamps and their course offerings. Curate a list
            of courses based on your individual needs and goals.
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
      </Stack>
      <Footer />
    </>
  );
};

export default Home;

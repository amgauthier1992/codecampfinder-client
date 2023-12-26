import { Container } from '@mui/material';
import styles from './styles';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';

const Home = () => {
  return (
    <Container
      maxWidth='xxl'
      sx={styles.Container}
    >
      <Header />
      {/* content */}
      <Footer />
    </Container>
  );
};

export default Home;

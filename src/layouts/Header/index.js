import { AppBar, Container, Toolbar } from '@mui/material';
import Logo from './logo';
import NavLinks from './nav-links';

import styles from './styles';

const Header = () => {
  return (
    <AppBar position='static'>
      <Container maxWidth='xxl'>
        <Toolbar
          disableGutters
          sx={styles.Toolbar}
        >
          <Logo />
          <NavLinks />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

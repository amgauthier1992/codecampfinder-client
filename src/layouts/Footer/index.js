import { Container, Paper, Typography } from '@mui/material';
import styles from './styles';

const Footer = () => {
  return (
    <Paper
      component='footer'
      square
      sx={styles.Paper}
    >
      <Container maxWidth='xxl'>
        <Typography
          align='center'
          fontWeight={600}
          variant='caption1'
        >
          Copyright © {new Date().getFullYear()} Codecamp Finder
        </Typography>
      </Container>
    </Paper>
  );
};

export default Footer;

import { Link as ReactRouterLink } from 'react-router-dom';
import { Typography } from '@mui/material';
import { useIsMobile } from '../../_helpers/breakpoint';
import DataObjectIcon from '@mui/icons-material/DataObject';
import styles from './styles';

const Logo = () => {
  const isMobile = useIsMobile();

  return (
    <Typography
      component={ReactRouterLink}
      sx={styles.Brand}
      tabIndex={0}
      to='/'
      variant='h1'
    >
      <DataObjectIcon sx={styles.LogoIcon} />
      {isMobile ? null : 'Codecamp Finder'}
    </Typography>
  );
};

export default Logo;

import { Alert, Snackbar as MUISnackbar } from '@mui/material';
import PropTypes from 'prop-types';
import styles from './styles';

const Snackbar = ({ message, open }) => {
  return (
    <MUISnackbar
      autoHideDuration={null}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
    >
      <Alert
        variant='filled'
        severity='success'
        sx={styles.Alert}
      >
        {message}
      </Alert>
    </MUISnackbar>
  );
};

export default Snackbar;

Snackbar.defaultProps = {
  open: false,
};

Snackbar.propTypes = {
  message: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

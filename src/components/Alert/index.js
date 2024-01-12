import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Link,
  Stack,
  Typography
} from '@mui/material';
import { alertAtom } from '../../_state/alert';

import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import styles from './styles';
import { useAlertActions } from '../../_actions/alert.actions';
import { useRecoilValue } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

function Alert() {
  const alert = useRecoilValue(alertAtom);
  const alertActions = useAlertActions();
  const handleClear = alertActions.clear;

  if (!alert?.error?.response || Object.keys(alert.error.response).length === 0) {
    return null;
  }

  return (
    <Dialog
      open
      maxWidth='sm'
      PaperProps={{
        sx: styles.DialogPaper
      }}
    >
      <DialogTitle>
        <Stack
          spacing={2}
          sx={styles.Title}
        >
          <Box sx={styles.TitleIcon}>
            <WarningAmberIcon color='error' />
          </Box>
          <Typography
            variant='h4'
            color='error'
          >
            {alert?.error?.title}
          </Typography>
        </Stack>
      </DialogTitle>
      <DialogContent sx={styles.Content}>
        <Stack spacing={2}>
          <Typography>
            {alert?.error?.message}. {alert?.error?.response?.data?.message}{' '}
            {alert?.error?.response?.data?.error?.message}{' '}
            {!alert?.error?.response?.data?.error?.message && alert?.error?.response?.data?.error}
          </Typography>
          <Typography>
            Please, try again. If the error persists, please contact us at{' '}
            <Link
              href='mailto:help@codecampfinder.com'
              target='_blank'
            >
              help@codecampfinder.com
            </Link>
          </Typography>
          <Typography>
            Error code:{' '}
            <Typography
              component='span'
              fontWeight='fontWeightMedium'
            >
              {uuidv4()}
            </Typography>
          </Typography>
        </Stack>
      </DialogContent>
      <DialogActions sx={styles.DialogActions}>
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            xs={12}
          >
            <Button
              variant='contained'
              onClick={handleClear}
              color='error'
              sx={styles.Button}
            >
              Close
            </Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
}

export { Alert };

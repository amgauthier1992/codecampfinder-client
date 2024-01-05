import { Backdrop, Box, Button, Fade, IconButton, Modal as MUIModal, Stack } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import { memo } from 'react';
import styles from './styles';

const component = ({
  children,
  handlePrimaryAction,
  handleSecondaryAction,
  hasSecondaryCta,
  onClose,
  open,
  primaryBtnColor,
  primaryBtnIcon,
  primaryBtnTitle,
  primaryBtnVariant,
  secondaryBtnColor,
  secondaryBtnIcon,
  secondaryBtnTitle,
  secondaryBtnVariant
}) => {
  return (
    <MUIModal
      disableEscapeKeyDown
      onClose={onClose}
      open={open}
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          sx: styles.Backdrop
        }
      }}
    >
      <Fade in={open}>
        <Box sx={styles.ModalBox}>
          <Box sx={styles.CloseButtonWrapper}>
            <IconButton
              onClick={onClose}
              sx={styles.IconButton}
            >
              <CloseIcon sx={styles.CloseIcon} />
            </IconButton>
          </Box>
          <Stack
            spacing={2}
            alignItems='center'
            sx={styles.ModalContent}
          >
            {children}
          </Stack>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={styles.ModalControls}
          >
            {hasSecondaryCta && (
              <Button
                color={secondaryBtnColor}
                endIcon={secondaryBtnIcon}
                onClick={handleSecondaryAction}
                variant={secondaryBtnVariant}
                size='medium'
              >
                {secondaryBtnTitle}
              </Button>
            )}
            <Button
              color={primaryBtnColor}
              endIcon={primaryBtnIcon}
              onClick={handlePrimaryAction}
              variant={primaryBtnVariant}
              size='medium'
            >
              {primaryBtnTitle}
            </Button>
          </Stack>
        </Box>
      </Fade>
    </MUIModal>
  );
};

export const Modal = memo(component);
export default Modal;

Modal.defaultProps = {
  children: false, //null?
  handleSecondaryAction: () => {},
  hasSecondaryCta: false,
  open: false,
  primaryBtnColor: 'primary',
  primaryBtnIcon: null, //false?
  primaryBtnVariant: 'contained',
  secondaryBtnColor: 'secondary',
  secondaryBtnIcon: null, //false?
  secondaryBtnTitle: '',
  secondaryBtnVariant: 'outlined'
};

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]), //false/null if using a conditional to render children where data doesn't yet exist?
  handlePrimaryAction: PropTypes.func.isRequired,
  handleSecondaryAction: PropTypes.func,
  hasSecondaryCta: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
  primaryBtnColor: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'info', 'warning']),
  primaryBtnIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  primaryBtnTitle: PropTypes.string.isRequired,
  primaryBtnVariant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  secondaryBtnColor: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'error',
    'info',
    'warning'
  ]),
  secondaryBtnIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  secondaryBtnTitle: PropTypes.string,
  secondaryBtnVariant: PropTypes.oneOf(['contained', 'outlined', 'text'])
};

import { FormControlLabel } from '@mui/material';
import PropTypes from 'prop-types';
import RadioInput from './input';

const radio = ({ color, disabled, label, size, value }) => {
  return (
    <FormControlLabel
      control={
        <RadioInput
          color={color}
          size={size}
        />
      }
      disabled={disabled}
      label={label}
      value={value}
    />
  );
};

export const Radio = radio;
export default Radio;

Radio.defaultProps = {
  color: 'primary',
  disabled: false,
  label: 'initial',
  size: 'medium',
  value: 'initial'
};

Radio.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'info', 'warning']),
  disabled: PropTypes.bool,
  label: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  value: PropTypes.oneOfType([PropTypes.node, PropTypes.bool])
};

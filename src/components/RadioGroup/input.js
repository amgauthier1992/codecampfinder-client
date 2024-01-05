import PropTypes from 'prop-types';
import Radio from '@mui/material/Radio';

const radioInput = ({ color, size, ...other }) => {
  return (
    <Radio
      color={color}
      size={size}
      {...other}
    />
  );
};

export const RadioInput = radioInput;
export default RadioInput;

RadioInput.defaultProps = {
  color: 'primary',
  size: 'medium',
};

RadioInput.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'info', 'warning']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

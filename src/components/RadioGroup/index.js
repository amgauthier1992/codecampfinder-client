import { FormControl, FormHelperText, RadioGroup as MUIRadioGroup } from '@mui/material';
import Radio from './radio';
import PropTypes from 'prop-types';
import styles from './styles';

const DEFAULT_VALUE = 'initial';

const RadioGroup = ({ disabled, error, onChange, options, row, value }) => {
  return (
    <FormControl
      error={Boolean(error)}
      variant='standard'
    >
      <MUIRadioGroup
        onChange={onChange}
        row={row}
        value={value}
      >
        {options.map((radio) => {
          return (
            <Radio
              key={radio.label}
              color={error ? 'error' : radio.color || 'primary'}
              disabled={disabled}
              label={radio.label}
              size={radio.size || 'medium'}
              value={radio.value}
            />
          );
        })}
      </MUIRadioGroup>
      <FormHelperText sx={styles.FormHelperText}>{error?.message}</FormHelperText>
    </FormControl>
  );
};

export default RadioGroup;

RadioGroup.defaultProps = {
  disabled: false,
  row: true,
  value: DEFAULT_VALUE
};

RadioGroup.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      color: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'info', 'warning']),
      label: PropTypes.string,
      size: PropTypes.oneOf(['small', 'medium', 'large']),
      value: PropTypes.oneOfType([PropTypes.node, PropTypes.bool])
    })
  ).isRequired,
  row: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.node, PropTypes.bool])
};

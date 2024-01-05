import {
  Box,
  Chip,
  FormControl,
  FormHelperText,
  MenuItem,
  Select as MUISelect,
  Typography
} from '@mui/material';
import { useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

function Select({ error, onChange, options, value, placeholder, multiple, ...other }) {
  const setSelectRenderValues = useCallback(
    (selected) => {
      //default state (no selected)
      if (selected?.length === 0) {
        return (
          <Typography
            variant='body1'
            sx={styles.Placeholder}
          >
            {placeholder}
          </Typography>
        );
      }

      //multi-select
      if (multiple) {
        const selectedOptions = options.filter((option) => selected.includes(option.value));
        return (
          <Box sx={styles.MultiSelectValues}>
            {selectedOptions.map((option) => (
              <Chip
                key={option.value}
                label={option.label}
              />
            ))}
          </Box>
        );
      }

      //single-select
      const displayValue = options.find((option) => option.value === selected);
      if (displayValue) {
        return displayValue.label;
      }

      return selected;
    },
    [placeholder, options, multiple]
  );

  if (!options.length) return null;

  return (
    <FormControl
      error={Boolean(error)}
      sx={styles.FormControl}
    >
      <MUISelect
        value={value}
        onChange={onChange}
        displayEmpty
        multiple={multiple || false}
        renderValue={setSelectRenderValues}
        sx={multiple ? styles.SelectMultiple : styles.Select}
        MenuProps={{
          sx: styles.SelectMenu
        }}
        {...other}
      >
        {options.map((option) => (
          <MenuItem
            value={option.value}
            sx={styles.MenuItemTextWrap}
            key={option.value}
          >
            {option.label}
          </MenuItem>
        ))}
      </MUISelect>
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
}

Select.defaultProps = {
  error: false,
  options: [],
  value: '',
  placeholder: '',
  multiple: false,
  size: 'medium'
};

Select.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      message: PropTypes.string,
      type: PropTypes.string
    })
  ]),
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string.isRequired
    })
  ),
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ]),
  multiple: PropTypes.bool,
  size: PropTypes.string
};

export default Select;

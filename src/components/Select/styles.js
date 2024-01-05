const styles = {
  FormControl: () => ({
    width: '100%',
  }),
  Select: () => ({
    height: '48px',
  }),
  SelectMenu: () => ({
    '& .MuiPaper-root': {
      width: '100px', //somehow prevents Menu paper from overflowing beyond width of input itself (?)
    },
    'maxHeight': '300px', //allow smaller scrollable Menu when many Select options exist
  }),
  SelectMultiple: () => ({
    minHeight: '48px',
  }),
  MenuItemTextWrap: () => ({
    //allow wrapping for long <li>'s
    '&.MuiMenuItem-root': {
      whiteSpace: 'normal',
    },
    '&.Mui-selected': {
      fontWeight: 600,
    },
  }),
  Placeholder: () => ({
    opacity: 0.45,
  }),
  MultiSelectValues: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 0.5,
  },
};

export default styles;

import breakpoints from './breakpoints';
import components from './components';
import { createTheme } from '@mui/material';
import palette from './palette';
import typography from './typography';

const theme = createTheme({
  breakpoints,
  components,
  palette,
  typography,
});

export default theme;

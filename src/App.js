import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route
          exact
          path='/'
          element={<Home />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/sign-up'
          element={<SignUp />}
        />
        <Route
          path='*'
          element={<div>404: Not Found</div>}
        />
      </Routes>
    </ThemeProvider>
  );
};

export default App;

//Things to explore:
//1. React-error-boundary (hook-based solution)
//2. Form validation solutions

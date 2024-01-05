import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { Alert } from './components/Alert';
import PrivateRoute from './components/PrivateRoute';
import BootcampSearch from './pages/BootcampSearch';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';
import UserCourses from './pages/UserCourses';
import Unauthorized from './pages/Unauthorized';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Alert />
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
          exact
          path='/dashboard'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route
            index
            element={
              <PrivateRoute>
                <UserCourses />
              </PrivateRoute>
            }
          />
          <Route
            path='search'
            element={
              <PrivateRoute>
                <BootcampSearch />
              </PrivateRoute>
            }
          />
          {/* <Route
            path='settings'
            element={
              <PrivateRoute>
                <>Settings</>
              </PrivateRoute>
            }
          /> */}
        </Route>
        <Route
          path='/unauthorized'
          element={<Unauthorized />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </ThemeProvider>
  );
};

export default App;

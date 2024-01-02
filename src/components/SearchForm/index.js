import { Grid } from '@mui/material';
import styles from './styles';

const SearchForm = () => {
  return (
    <Grid
      component='form'
      container
      //   onSubmit={handleSubmit(onSubmit)}
      spacing={4}
      //   sx={styles.LoginForm}
    ></Grid>
  );
};

export default SearchForm;

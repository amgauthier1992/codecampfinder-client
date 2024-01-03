import { Box, Grid, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { fetchCourses } from '../../_state/courses';
import { useRecoilValue } from 'recoil';
import OfferingCard from '../OfferingCard';
import PropTypes from 'prop-types';
import styles from './styles';

const CourseList = ({ toggleSuccessAlert }) => {
  const courseData = useRecoilValue(fetchCourses('offerings'));

  if (!courseData?.length) {
    return (
      <Box sx={styles.EmptyResults}>
        <Typography
          align='center'
          variant='h3'
        >
          Sorry, no courses found matching that criteria.
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container>
      {courseData?.map((offering, i) => (
        <Grid
          key={uuidv4()}
          item
          xs={12}
          lg={6}
        >
          <OfferingCard
            index={i}
            offering={offering}
            toggleSuccessAlert={toggleSuccessAlert}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CourseList;

CourseList.propTypes = {
  toggleSuccessAlert: PropTypes.func.isRequired
};

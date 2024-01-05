import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography
} from '@mui/material';
import { useDeleteUserCourse, useGetUserCourseDetails } from '../../_actions/users.actions';
import { useCallback } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';
import styles from './styles';

const UserCourseListItem = ({ toggleCourseDetailsModal, toggleDeleteSuccessAlert, userCourse }) => {
  const { destroy } = useDeleteUserCourse();
  const { get } = useGetUserCourseDetails();

  const onSuccessGetCourseDetails = useCallback(() => {
    toggleCourseDetailsModal();
  }, [toggleCourseDetailsModal]);

  const onSuccessDeleteCourse = useCallback(() => {
    toggleDeleteSuccessAlert();
  }, [toggleDeleteSuccessAlert]);

  return (
    <Card sx={styles.Card}>
      <Stack direction='row'>
        <CardMedia
          sx={styles.CardLogo}
          image={require(`../../images/logos/${userCourse.Bootcamp.toLowerCase().replace(/\s+/g, '-')}.png`)}
          title={userCourse.Bootcamp}
        />
        <CardContent sx={styles.CardContent}>
          <Typography
            variant='h4'
            sx={styles.CourseName}
          >
            {userCourse.Course}
          </Typography>
          <Typography
            fontWeight={600}
            variant='body2'
            mt={2}
          >
            {userCourse.Bootcamp}
          </Typography>
        </CardContent>
      </Stack>
      <CardActions>
        <Button
          onClick={() => get(userCourse.CourseId, userCourse.Bootcamp, onSuccessGetCourseDetails)}
          variant='outlined'
        >
          Details
        </Button>
        <Button
          color='error'
          onClick={() => destroy(userCourse.CourseId, onSuccessDeleteCourse)}
          variant='outlined'
        >
          <DeleteIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserCourseListItem;

UserCourseListItem.propTypes = {
  toggleCourseDetailsModal: PropTypes.func.isRequired,
  toggleDeleteSuccessAlert: PropTypes.func.isRequired,
  userCourse: PropTypes.shape({
    Bootcamp: PropTypes.string,
    Course: PropTypes.string,
    CourseId: PropTypes.number
  })
};

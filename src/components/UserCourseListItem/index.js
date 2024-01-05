import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography
} from '@mui/material';
import { useGetUserCourseDetails, useDeleteUserCourse } from '../../_actions/users.actions';
import { useCallback, useState } from 'react';
import Modal from '../Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';
import styles from './styles';

const UserCourseListItem = ({ toggleCourseDetailsModal, toggleDeleteSuccessAlert, userCourse }) => {
  const { get } = useGetUserCourseDetails();
  const { destroy } = useDeleteUserCourse();
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);

  const onSuccessGetCourseDetails = useCallback(() => {
    toggleCourseDetailsModal();
  }, [toggleCourseDetailsModal]);

  const onSuccessDeleteCourse = useCallback(() => {
    toggleDeleteSuccessAlert();
  }, [toggleDeleteSuccessAlert]);

  const toggleDeleteConfirmModal = useCallback(() => {
    setConfirmModalOpen(!confirmModalOpen);
  }, [confirmModalOpen]);

  return (
    <>
      <Card sx={styles.Card}>
        <Stack direction='row'>
          <CardMedia
            sx={styles.CardLogo}
            image={require(
              `../../images/logos/${userCourse.Bootcamp.toLowerCase().replace(/\s+/g, '-')}.png`
            )}
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
        <CardActions sx={styles.CardActions}>
          <Button
            onClick={() => get(userCourse.CourseId, userCourse.Bootcamp, onSuccessGetCourseDetails)}
            variant='outlined'
          >
            Details
          </Button>
          <Button
            color='error'
            onClick={() => toggleDeleteConfirmModal(userCourse.CourseId)}
            variant='outlined'
          >
            <DeleteIcon />
          </Button>
        </CardActions>
      </Card>
      <Modal
        handlePrimaryAction={() => destroy(userCourse.CourseId, onSuccessDeleteCourse)}
        handleSecondaryAction={toggleDeleteConfirmModal}
        hasSecondaryCta
        open={confirmModalOpen}
        onClose={toggleDeleteConfirmModal}
        primaryBtnTitle='Delete'
        secondaryBtnTitle='Close'
        primaryBtnColor='error'
        secondaryBtnColor='primary'
        primaryBtnVariant='contained'
        secondaryBtnVariant='outlined'
      >
        <Typography
          variant='h3'
          color='primary'
        >
          Confirmation Required
        </Typography>
        <Typography variant='body1'>
          Are you sure you want to remove this course from your dashboard?
        </Typography>
      </Modal>
    </>
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

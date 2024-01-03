import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  ListItemIcon,
  Stack,
  Typography
} from '@mui/material';
import { usePostUserCourse } from '../../_actions/users.actions';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import PropTypes from 'prop-types';
import styles from './styles';
import React, { useCallback } from 'react';

const OfferingCard = ({ offering, toggleSuccessAlert }) => {
  const { post } = usePostUserCourse();
  const imgSrc = offering.Name.toLowerCase().replace(/\s+/g, '-');

  const handleSuccessAddCourse = useCallback(() => {
    toggleSuccessAlert();
  }, [toggleSuccessAlert]);

  const handleAddCourse = useCallback(
    (courseName, courseSchedule) => {
      const data = {
        Bootcamp: offering.Name,
        Course: courseName,
        Schedule: courseSchedule
      };
      post(data, handleSuccessAddCourse);
    },
    [handleSuccessAddCourse, offering.Name, post]
  );

  return (
    <Card sx={styles.Card}>
      <Stack
        direction='row'
        alignItems='center'
      >
        <CardMedia
          sx={styles.CardLogo}
          image={require(`../../images/logos/${imgSrc}.png`)}
          title={offering.Name}
        />
        <Typography
          color='common.black'
          component={Link}
          href={offering.Website}
          ml={2}
          sx={styles.Bootcamp}
          target='_blank'
          variant='h6'
        >
          {offering.Name}
        </Typography>
      </Stack>
      <CardContent sx={styles.CardContent}>
        <Stack direction={{ xs: 'column', md: 'row' }}>
          {offering.Locations.map((location) => (
            <Typography
              key={location.city}
              fontWeight={400}
              mr={2}
              variant='caption1'
            >
              {`${location.city},${location.state}`}
            </Typography>
          ))}
        </Stack>
        <Stack
          direction='column'
          pt={2}
          spacing={2}
        >
          {offering.Courses.map((course, i) => (
            <Grid
              container
              key={`${course}-${i}`}
            >
              <Grid
                item
                xs={12}
                sx={{ paddingBottom: '8px' }}
              >
                <Typography
                  key={course.Name}
                  fontWeight={600}
                  variant='body2'
                >
                  {`${i + 1}. ${course.Name}`}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={4}
                sx={styles.GridItem}
              >
                <Typography variant='body2'>{`Schedule: ${(
                  course.Schedule.Type.charAt(0).toUpperCase() + course.Schedule.Type.slice(1)
                ).replace(/_/g, ' ')}`}</Typography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={4}
                sx={styles.GridItem}
              >
                <Typography variant='body2'>{`Duration: ${course.Schedule.Duration} weeks`}</Typography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={4}
                sx={styles.GridItem}
              >
                <Typography variant='body2'>{`Up-front Cost: $${course.PaymentSummary.Up_front}`}</Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sx={styles.GridItem}
              >
                <Typography variant='body2'>
                  Languages:{' '}
                  {course.Languages.map((language, i) => {
                    if (i === course.Languages.length - 1) {
                      return (
                        <Typography
                          key={`${language}${i}`}
                          variant='span'
                        >
                          {language}
                        </Typography>
                      );
                    }
                    return (
                      <Typography
                        key={`${language}${i}`}
                        variant='span'
                      >
                        {language},{' '}
                      </Typography>
                    );
                  })}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={4}
                sx={styles.GridItem}
              >
                <Typography
                  component='div'
                  sx={styles.DetailWithIcon}
                  variant='body2'
                >
                  Online
                  <ListItemIcon sx={styles.DetailIcon}>
                    {course.Is_online ? (
                      <CheckCircleOutlineOutlinedIcon color='success' />
                    ) : (
                      <HighlightOffIcon color='error' />
                    )}
                  </ListItemIcon>
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={4}
                sx={styles.GridItem}
              >
                <Typography
                  component='div'
                  sx={styles.DetailWithIcon}
                  variant='body2'
                >
                  Financing:
                  <ListItemIcon sx={styles.DetailIcon}>
                    {course.PaymentSummary.Financing ? (
                      <CheckCircleOutlineOutlinedIcon color='success' />
                    ) : (
                      <HighlightOffIcon color='error' />
                    )}
                  </ListItemIcon>
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={4}
                sx={styles.GridItem}
              >
                <Typography
                  component='div'
                  sx={styles.DetailWithIcon}
                  variant='body2'
                >
                  ISA:
                  <ListItemIcon sx={styles.DetailIcon}>
                    {course.PaymentSummary.Isa ? (
                      <CheckCircleOutlineOutlinedIcon color='success' />
                    ) : (
                      <HighlightOffIcon color='error' />
                    )}
                  </ListItemIcon>
                </Typography>
              </Grid>
              {/* <Grid
                item
                xs={12}
                lg={3}
                sx={styles.GridItem}
              >
                <Typography
                  component='div'
                  sx={styles.RepaymentGuarantee}
                  variant='body2'
                >
                  Refund Policy:
                  <ListItemIcon sx={styles.DetailIcon}>
                    {course.PaymentSummary.Repayment_guarantee ? (
                      <CheckCircleOutlineOutlinedIcon color='success' />
                    ) : (
                      <HighlightOffIcon color='error' />
                    )}
                  </ListItemIcon>
                </Typography>
              </Grid> */}
              <Button
                color='secondary'
                onClick={() => handleAddCourse(course.Name, course.Schedule.Type)}
                variant='contained'
                sx={styles.AddCourseBtn}
              >
                Add Course
              </Button>
            </Grid>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default OfferingCard;

OfferingCard.propTypes = {
  offering: PropTypes.shape({
    Courses: PropTypes.arrayOf(
      PropTypes.shape({
        Is_online: PropTypes.bool,
        Languages: PropTypes.arrayOf(PropTypes.string),
        Name: PropTypes.string,
        Pair_programming: PropTypes.bool,
        PaymentSummary: PropTypes.shape({
          Financing: PropTypes.bool,
          Isa: PropTypes.bool,
          Placement_based: PropTypes.bool,
          Repayment_guarantee: PropTypes.bool,
          Up_front: PropTypes.number
        }),
        Prior_experience: PropTypes.bool,
        Schedule: PropTypes.shape({
          Type: PropTypes.string,
          Hours: PropTypes.number,
          Duration: PropTypes.number
        }),
        Solo_instruction: PropTypes.bool
      })
    ),
    Locations: PropTypes.arrayOf(
      PropTypes.shape({
        city: PropTypes.string,
        state: PropTypes.string
      })
    ),
    Name: PropTypes.string,
    Website: PropTypes.string
  }).isRequired,
  toggleSuccessAlert: PropTypes.func.isRequired
};

//Model structure
/* 
  {
    Courses: [
      Is_online: t/f,
      Languages: ['JS','C','Java'],
      Name: <Course Title>,
      Pair_programming: t/f,
      PaymentSummary: {
        Financing: t/f
        Isa: t/f
        Placement_based: t/f
        Repayment_guarantee: t/f
        Up_front: number (int)
      },
      Prior_experieince: t/f,
      Schedule: {
        Type: full time/part time,
        Hours: number,
        Duration: number (weeks)
      },
      Solo_instruction: t/f
    ],
    Locations: [
      {
        city: <city>
        state: <state>
      }
    ],
    Name: <Bootcamp>,
    Website: <Bootcamp Website>
  }
*/

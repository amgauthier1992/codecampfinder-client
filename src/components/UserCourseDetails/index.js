import { Grid, Link, Typography } from '@mui/material';
import { Modal } from '../Modal';
import { WEBSITES } from '../../static-info';
import styles from './styles';

const UserCourseDetails = ({ currentCourse, handleClose, open }) => {
  if (!currentCourse) {
    return null;
  }

  return (
    <Modal
      handlePrimaryAction={handleClose}
      open={open}
      onClose={handleClose}
      primaryBtnTitle='Close'
    >
      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          xs={12}
          sx={styles.GridItemTop}
        >
          <Typography
            variant='h4'
            sx={styles.ContentHeader}
          >
            General Course Info
          </Typography>
          <Typography
            variant='body1'
            sx={styles.LineItem}
          >
            <Typography
              variant='span'
              fontWeight={600}
            >
              Bootcamp:{' '}
            </Typography>
            {currentCourse?.Course?.bootcamp}
          </Typography>
          <Typography
            variant='body1'
            fontWeight={600}
            sx={styles.LineItem}
          >
            Website:{' '}
            <Typography
              component={Link}
              href={WEBSITES[currentCourse?.Course?.bootcamp]}
              fontWeight={600}
              variant='span'
            >
              {WEBSITES[currentCourse?.Course?.bootcamp]}
            </Typography>
          </Typography>
          <Typography
            variant='body1'
            sx={styles.LineItem}
          >
            <Typography
              variant='span'
              fontWeight={600}
            >
              Course Name:{' '}
            </Typography>
            {currentCourse?.Course?.name}
          </Typography>
          <Typography
            variant='body1'
            sx={styles.LineItem}
          >
            <Typography
              variant='span'
              fontWeight={600}
            >
              Course Schedule:{' '}
            </Typography>
            {currentCourse?.Schedule?.type.charAt(0).toUpperCase() +
              currentCourse?.Schedule?.type.slice(1).replace(/_/g, ' ')}
          </Typography>
          <Typography
            variant='body1'
            sx={styles.LineItem}
          >
            <Typography
              variant='span'
              fontWeight={600}
            >
              Course Duration:{' '}
            </Typography>
            {currentCourse?.Schedule?.duration} weeks
          </Typography>
          <Typography
            variant='body1'
            sx={styles.LineItem}
          >
            <Typography
              variant='span'
              fontWeight={600}
            >
              Time Commitment (Avg. Weekly):{' '}
            </Typography>
            {currentCourse?.Schedule?.hours} hours
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={styles.GridItem}
        >
          <Typography
            variant='h4'
            sx={styles.ContentHeader}
          >
            Technology
          </Typography>
          <Typography
            variant='body1'
            sx={styles.LineItem}
          >
            <Typography
              variant='span'
              fontWeight={600}
            >
              Languages:{' '}
              {currentCourse?.Languages?.map((language, i) => {
                if (i === currentCourse.Languages.length - 1) {
                  return (
                    <Typography
                      key={`${language}${i}`}
                      fontWeight={400}
                      variant='span'
                    >
                      {language}
                    </Typography>
                  );
                }
                return (
                  <Typography
                    key={`${language}${i}`}
                    fontWeight={400}
                    variant='span'
                  >
                    {language},{' '}
                  </Typography>
                );
              })}
            </Typography>
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={styles.GridItem}
        >
          <Typography
            variant='h4'
            sx={styles.ContentHeader}
          >
            Financial Information
          </Typography>
          <Typography
            variant='body1'
            sx={styles.LineItem}
          >
            <Typography
              variant='span'
              fontWeight={600}
            >
              Up-front Cost:{' '}
            </Typography>
            ${currentCourse?.PaymentSummary?.up_front}
          </Typography>
          <Typography
            variant='body1'
            sx={styles.LineItem}
          >
            <Typography
              variant='span'
              fontWeight={600}
            >
              Financing Available:{' '}
            </Typography>
            {currentCourse?.PaymentSummary?.financing ? 'Yes' : 'No'}
          </Typography>
          <Typography
            variant='body1'
            sx={styles.LineItem}
          >
            <Typography
              variant='span'
              fontWeight={600}
            >
              Income Sharing Agreement (ISA):{' '}
            </Typography>
            {currentCourse?.PaymentSummary?.isa ? 'Yes' : 'No'}
          </Typography>
          <Typography
            variant='body1'
            sx={styles.LineItem}
          >
            <Typography
              variant='span'
              fontWeight={600}
            >
              Placement Based Guarantee:{' '}
            </Typography>
            {currentCourse?.PaymentSummary?.placement_based ? 'Yes' : 'No'}
          </Typography>
          <Typography
            variant='body1'
            sx={styles.LineItem}
          >
            <Typography
              variant='span'
              fontWeight={600}
            >
              Money Back Guarantee:{' '}
            </Typography>
            {currentCourse?.PaymentSummary?.repayment_guarantee ? 'Yes' : 'No'}
          </Typography>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default UserCourseDetails;

import { Button, Grid, Stack, Typography } from '@mui/material';
import { COURSE_SCHEDULE_OPTIONS, STATES, YES_NO } from '../../static-info';
import { useForm, Controller } from 'react-hook-form';
import { useCallback } from 'react';
import { useSearchCourses } from '../../_actions/courses.actions';
import Select from '../Select';
import RadioGroup from '../RadioGroup';
import PropTypes from 'prop-types';
import styles from './styles';

const SearchForm = ({ handleDisplayResults }) => {
  const { handleSubmit, control } = useForm();
  const { search } = useSearchCourses();

  const onSubmit = useCallback(
    (data, e) => {
      e.preventDefault();
      const body = {
        ...data,
        fin_assist: true //User should not be prevented from seeing courses if they select 'no financing'. Set fin_assist to always be true on the req.body
      };
      e.preventDefault();
      search(body, handleDisplayResults);
    },
    [handleDisplayResults, search]
  );

  return (
    <Stack spacing={4}>
      <Typography
        variant='h1'
        color='primary'
      >
        Find Courses
      </Typography>
      <Typography variant='body1'>
        Fill out the form below to filter bootcamp course results depending on your personalized
        criteria.
      </Typography>
      <Grid
        component='form'
        container
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid
          item
          xs={12}
          lg={7}
          xl={4}
          sx={styles.GridItem}
        >
          <Stack
            direction='column'
            spacing={1}
          >
            {/* stateCode */}
            <Typography
              variant='body1'
              fontWeight={600}
            >
              {'1. Please select a state'}
            </Typography>
            <Controller
              control={control}
              name='stateCode'
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <Select
                  error={error}
                  options={STATES}
                  onChange={onChange}
                  placeholder='State'
                  value={value}
                />
              )}
              rules={{
                required: 'Please select an option for a type of schedule'
              }}
            />
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          lg={9}
          sx={styles.GridItem}
        >
          <Stack
            direction='column'
            spacing={1}
          >
            {/* is_online */}
            <Typography
              variant='body1'
              fontWeight={600}
            >
              {'2. Should the course only be online / remote-friendly?'}
            </Typography>
            <Controller
              control={control}
              name='is_online'
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <RadioGroup
                  value={value}
                  onChange={onChange}
                  options={YES_NO}
                  error={error}
                />
              )}
              rules={{
                required: 'Please select a preference for in-person or remote learning'
              }}
            />
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          lg={9}
          sx={styles.GridItem}
        >
          <Stack
            direction='column'
            spacing={1}
          >
            {/* prior_experience */}
            <Typography
              variant='body1'
              fontWeight={600}
            >
              {'3. Do you have any prior programming experience?'}
            </Typography>
            <Controller
              control={control}
              name='prior_experience'
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <RadioGroup
                  value={value}
                  onChange={onChange}
                  options={YES_NO}
                  error={error}
                />
              )}
              rules={{
                required: 'Please select if you have any prior programming experience'
              }}
            />
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          lg={7}
          xl={4}
          sx={styles.GridItem}
        >
          {/* schedule */}
          <Stack
            direction='column'
            spacing={2}
          >
            <Typography
              variant='body1'
              fontWeight={600}
            >
              {'4. What type of course schedule can you commit to?'}
            </Typography>
            <Controller
              control={control}
              name='schedule'
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <Select
                  error={error}
                  options={COURSE_SCHEDULE_OPTIONS}
                  onChange={onChange}
                  placeholder='Schedule'
                  value={value}
                />
              )}
              rules={{
                required: 'Please select an option for the type of course schedule'
              }}
            />
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          lg={9}
          sx={styles.GridItem}
        >
          {/* fin_assist */}
          <Stack
            direction='column'
            spacing={1}
          >
            <Typography
              variant='body1'
              fontWeight={600}
            >
              {
                '5. Do you anticipate financing your investment or require a course that will offer some form of financial assistance or contingency (i.e. Income Sharing Agreement)?'
              }
            </Typography>
            <Controller
              control={control}
              name='fin_assist'
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <RadioGroup
                  value={value}
                  onChange={onChange}
                  options={YES_NO}
                  error={error}
                />
              )}
              rules={{
                required:
                  'Please select if you anticipate financing or require financial assistance'
              }}
            />
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          lg={9}
          sx={[styles.GridItem, styles.CtaWrapper]}
        >
          <Button
            type='submit'
            variant='contained'
            sx={styles.SearchBtn}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  handleDisplayResults: PropTypes.func.isRequired
};

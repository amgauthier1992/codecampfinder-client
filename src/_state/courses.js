import { atom, selectorFamily } from 'recoil';

const coursesState = atom({
  key: 'coursesState',
  default: {}
});

const fetchCourses = selectorFamily({
  key: 'fetchCourses',
  get: attribute => ({get}) => get(coursesState)[attribute],
  set: attribute => ({set}, newValue) =>
    set(coursesState, prevState => ({...prevState, [attribute]: newValue})),
});

export { coursesState, fetchCourses };

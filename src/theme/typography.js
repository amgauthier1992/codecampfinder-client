import palette from './palette';

const typography = {
  htmlFontSize: 16,
  color: palette.common.black,
  fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
  fontStyle: 'normal',
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    color: palette.primary.main,
    fontSize: '2.25rem',
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: '-0.09375rem'
  },
  h2: {
    color: palette.primary.main,
    fontWeight: 500,
    fontSize: '1.75rem',
    lineHeight: 1.2,
    letterSpacing: '-0.0625rem'
  },
  h3: {
    fontWeight: 700,
    fontSize: '1.5rem',
    lineHeight: 1.24,
    letterSpacing: '0.01563rem'
  },
  h4: {
    fontWeight: 700,
    fontSize: '1.25rem',
    lineHeight: 1.3,
    letterSpacing: '0.0625rem'
  },
  h5: {
    fontWeight: 400,
    fontSize: '1.25rem',
    lineHeight: 1.3
  },
  h6: {
    fontWeight: 700,
    fontSize: '1rem',
    lineHeight: 1.6,
    letterSpacing: '0.00938rem'
  },
  subtitle1: {
    fontSize: '1.188rem',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.009rem'
  },
  subtitle2: {
    fontSize: '1.063rem',
    fontWeight: 500,
    lineHeight: 1.57,
    letterSpacing: '0.006rem'
  },
  body1: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.009rem'
  },
  body2: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.43,
    letterSpacing: '0.011rem'
  },
  caption1: {
    // color:
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: 1.66,
    letterSpacing: '0.025rem'
  },
  caption2: {
    // color:
    fontSize: '0.75rem',
    fontWeight: 400,
    fontStyle: 'italic',
    lineHeight: 1.66,
    letterSpacing: '0.025rem'
  },
  overline: {
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: 1.66,
    letterSpacing: '0.063rem',
    textTransform: 'uppercase'
  }
};

export default typography;

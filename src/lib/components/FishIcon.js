import React from 'react';
import PropTypes from 'prop-types';
import SvgWrapper from './SvgWrapper';

const FishIcon = ({ innerColor, outerColor, ...props }) => {
  return (
    <SvgWrapper {...props}>
      <path
        d="M215.83 107.75c0 59.59-48.16 108.11-108.09 108.11C48.17 215.86 0 167.34 0 107.75 0 47.81 48.17 0 107.74 0c59.93 0 108.09 47.81 108.09 107.75z"
        fill={outerColor}
      />
      <path
        d="M185.51 88.84c0-2.14-19.99-4.28-32.47 13.92-14.99-13.56-38.53-21.41-45.31-23.2 0-3.56 10.34-14.26 6.78-17.49-3.56-3.2-16.76-2.49-27.83 12.85-14.26 6.07-37.1 1.07-57.43 32.82l7.84 6.43-6.42 3.21c20.33 31.76 47.1 21.76 61.36 27.82 11.07 15.35 20.34 10.71 23.9 8.57-8.56-7.85-10.34-6.42-10.34-9.99 6.78-1.79 39.96-11.42 47.45-24.63 18.91 25.69 32.47 15.71 32.47 13.56 0 0-14.99-10.7-15.35-21.4.36-12.47 15.35-22.47 15.35-22.47zM68.85 101.33c0 3.57-2.85 6.42-6.06 6.42a6.39 6.39 0 01-6.42-6.42c0-3.2 2.85-6.06 6.42-6.06 3.21 0 6.06 2.86 6.06 6.06zm5.71 36.38c12.12-9.98 22.48-29.97 3.22-56 16.4 11.42 24.61 43.16-3.22 56z"
        fill={innerColor}
      />
    </SvgWrapper>
  );
};

FishIcon.defaultProps = {
  outerColor: '#403b8a',
  innerColor: '#fefefe',
};
FishIcon.propTypes = {
  ...SvgWrapper.propTypes,
  outerColor: PropTypes.string,
  innerColor: PropTypes.string,
};

export default FishIcon;

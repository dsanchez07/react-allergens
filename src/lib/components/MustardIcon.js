import React from 'react';
import PropTypes from 'prop-types';
import SvgWrapper from './SvgWrapper';

const MustardIcon = ({ innerColor, outerColor, ...props }) => {
  const style = {
    fill: outerColor,
  };

  return (
    <SvgWrapper {...props}>
      <path
        style={style}
        d="M31.66 32.49c42.58-43.32 111.86-43.32 154.43 0 42.94 42.97 42.94 112.86 0 155.81-42.58 42.97-111.86 42.97-154.43 0-42.21-42.94-42.21-112.84 0-155.81z"
      />
      <path
        style={{ fill: innerColor }}
        d="M93.37 63.8l10.09 9.82L90.47 93.3l2.54 2.17 19.12-13.1 10.1 10.18 6.86-6.9-28.87-28.77zM140.56 4.89L97.69 48.15l40.06 40.05L186.51 39c-13.48-13.59-27.98-27.2-45.95-34.11z"
      />
      <path
        d="M82.89 102.4h0c-1.44 1.82-1.8 8-7.56 9.83-1.09.36-3.62 1.81-4.7 2.54-3.61 4.01-1.08 8.37 0 12.74.37 2.19.72 6.19-.72 7.65-2.88 3.27-6.85 5.83-8.66 6.91-5.05 2.56-3.61 13.84 0 18.94"
        fill="none"
        stroke={innerColor}
        strokeWidth={4.383}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
        style={{ fill: innerColor }}
        d="M51.51 179.93c-14.44-13.11.36-24.03 16.59-24.03 6.5 0 15.16 1.1 26.35 2.92 28.86 5.1 26.7-5.83 45.46-4.73 19.12 1.1 41.49 9.1 31.38 22.57-5.77 7.28-27.42 19.66-66.03 16.74-28.86-2.18-40.76-1.45-53.75-13.47z"
      />
      <path
        style={style}
        d="M140.63 182.85s9.39-.73 17.68-6.55c7.94-5.1 6.86-11.65 6.86-11.65s6.12 6.18-4.7 13.1c-7.21 5.1-11.54 6.92-19.84 5.1z"
      />
    </SvgWrapper>
  );
};

MustardIcon.defaultProps = {
  outerColor: '#c69838',
  innerColor: '#fefefe',
};
MustardIcon.propTypes = {
  ...SvgWrapper.propTypes,
  outerColor: PropTypes.string,
  innerColor: PropTypes.string,
};

export default MustardIcon;

import React from 'react';
import PropTypes from 'prop-types';

const SvgWrapper = ({ width, height, wrapperStyle, children, ...props }) => {
  return (
    <div style={{ width, height, ...wrapperStyle }}>
      <svg viewBox={`0 0 216 216`} {...props}>
        {children}
      </svg>
    </div>
  );
};

SvgWrapper.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  children: PropTypes.node.isRequired,
};

SvgWrapper.defaultProps = {
  width: 200,
  height: 200,
  wrapperStyle: {},
};

export default SvgWrapper;

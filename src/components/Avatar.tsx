import React from 'react';
import PropTypes from '../utils/propTypes';
import classNames from 'classnames';
const Avatar = ({
  rounded = '',
  circle = '',
  className = '',
  ...restProps
}) => {
  const classes = classNames({ 'rounded-circle': circle, rounded }, className);
  return (
    <img
      src="https://via.placeholder.com/100x90.png"
      style={{ width: 40, height: 40 }}
      className={classes}
      alt=""
      {...restProps}
    />
  );
};

Avatar.propTypes = {
  rounded: PropTypes.bool,
  circle: PropTypes.bool,
};

Avatar.defaultProps = {
  rounded: false,
  circle: true,
};

export default Avatar;

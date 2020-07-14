import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { buttonName } = props;
  return <div>{buttonName}</div>;
};

Button.propTypes = { buttonName: PropTypes.string.isRequired };

export default Button;

/* Removed rules for accesibility, for they are outside the scope of this project */

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { buttonName } = props;
  const { wide } = props;
  const { color } = props;
  const { handleClick } = props;

  if (wide) {
    return (
      <div
        style={{ width: '50%', background: color }}
        className="Button"
        role="button"
        tabIndex={0}
        onClick={() => handleClick(buttonName)}
      >
        {buttonName}
      </div>
    );
  }
  return (
    <div
      style={{ width: '25%', background: color }}
      className="Button"
      role="button"
      tabIndex={0}
      onClick={() => handleClick(buttonName)}
    >
      {buttonName}
    </div>
  );
};

Button.defaultProps = {
  wide: false,
  color: '#f5913e',
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

export default Button;

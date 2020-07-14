import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { buttonName } = props;
  const { wide } = props;
  const { color } = props;
  if (wide) {
    return (
      <div style={{ width: '50%', background: color }} className="Button">
        {buttonName}
      </div>
    );
  }
  return (
    <div style={{ width: '25%', background: color }} className="Button">
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
};

export default Button;

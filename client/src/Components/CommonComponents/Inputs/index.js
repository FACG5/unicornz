import React from 'react';
import propTypes from 'prop-types';

import './style.css';

export default function index(props) {
  const {
    value, type, label, name, width, placeholder, onChange,
  } = props;
  return (
    <div className="common-input">
      <label className="common-label">
        {label}
:
        <input
          value={value}
          type={type}
          name={name}
          onChange={onChange}
          style={{ width }}
          placeholder={placeholder}
        />
      </label>
    </div>
  );
}

index.propTypes = {
  value: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  type: propTypes.string,
  width: propTypes.string,
};

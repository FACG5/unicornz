import React from 'react';
import propTypes from 'prop-types';

import './style.css';

export default function index(props) {
  const { value, onClick } = props;
  return (
    <React.Fragment>
      <label>
Post Code
        <input
          name="search-bar"
          type="text"
          width="200px"
          placeholder="search"
          className="common-input"
          value={value}
        />
      </label>
      <label>
        {' '}
Subject
        <select>
          <option selected>Marie Clare</option>
          <option>Ahmad</option>
          <option>Marwan</option>
        </select>
      </label>
      <button className="button" onClick={onClick}>
              Search
      </button>
    </React.Fragment>
  );
}

index.propTypes = {
  value: propTypes.string.isRequired,
};

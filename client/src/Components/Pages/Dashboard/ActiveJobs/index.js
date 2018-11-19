import React from 'react';
import Input from '../../../CommonComponents/Inputs';
import Button from '../../../CommonComponents/Button';

import './style.css';

export default ({ onChange, onClick }) => (
  <div className="find">
    <h2>Find Job</h2>
    <Input type="text" label="Post code" name="postcode" width="150px" onChange={onChange} />

    <label>
Subject
      <select name="subject" onChange={onChange}>
        <option selected>Marie Clare</option>
        <option>Ahmad</option>
        <option>Marwan</option>
      </select>
    </label>

    <Button className="button" value="Search" color="#5D6A8B" onClick={onClick} />
  </div>


);

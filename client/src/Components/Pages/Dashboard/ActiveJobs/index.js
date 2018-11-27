import React, { Component } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';
// import Input from '../../../CommonComponents/Inputs';
import Button from '../../../CommonComponents/Button';

import './style.css';

class Search extends Component {
  state = {
    location: '',
    subject: '',
    redirect: '',
    jobs: '',
  };


  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleClick =() => {
    axios({
      method: 'post',
      url: '/dash/search',
      data: this.state,
    }).then((res) => {
      this.setState({
        redirect: true,
        jobs: res.data,
      });
    }).catch((error) => {
      console.log('error:', error);
    });
  }

  render() {
    const { redirect, jobs } = this.state;
    if (redirect) {
      return (
        <Redirect to={{
          pathname: '/workexperiencelist',
          state: { jobs, check: true },
        }}
        />
      );
    }
    return (
      <div className="find">
        <h2>Find Job</h2>
        <span>Location</span>
        <input type="text" name="location" onChange={this.handleChange} id="location-inp"/>
        <span>Subject</span>
        <select name="subject" onChange={this.handleChange}>
          <option selected>All</option>
          <option>Science</option>
          <option>Engineerign</option>
          <option>Technology</option>
          <option>Mathmatics</option>
        </select>

        <Button className="button" value="Search" color="#FFF" onClick={this.handleClick} />
      </div>
    );
  }
}

export default Search;

import React, { Component } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';

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
      url: '/api/v1/dash/search',
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
        <span>City</span>
        <input type="text" name="location" list="options" onChange={this.handleChange} id="location-inp" />
        <datalist id="options">
          <select>
            <option value="Bath"></option>
            <option value="Birmingham"></option>
            <option value="Bradford"></option>
            <option value="Brighton & Hove"></option>
            <option value="Bristol"></option>
            <option value="Cambridge"></option>
            <option value="Canterbury"></option>
            <option value="Carlisle"></option>
            <option value="Chelmsford"></option>
            <option value="Chester"></option>
            <option value="Chichester"></option>
            <option value="Coventry"></option>
            <option value="Derby"></option>
            <option value="Durham"></option>
            <option value="Ely"></option>
            <option value="Exeter"></option>
            <option value="Gloucester"></option>
            <option value="Hereford"></option>
            <option value="Kingston-upon-Hull"></option>
            <option value="Lancaster"></option>
            <option value="Leeds"></option>
            <option value="Leicester"></option>
            <option value="Lichfield"></option>
            <option value="Lincoln"></option>
            <option value="Liverpool"></option>
            <option value="(City of) London"></option>
            <option value="London"></option>
            <option value="Manchester"></option>
            <option value="Newcastle-upon-Tyne"></option>
            <option value="Norwich"></option>
            <option value="Nottingham"></option>
            <option value="Oxford"></option>
            <option value="Peterborough"></option>
            <option value="Plymouth"></option>
            <option value="Portsmouth"></option>
            <option value="Preston"></option>
            <option value="Ripon"></option>
            <option value="Salford"></option>
            <option value="Salisbury"></option>
            <option value="Sheffield"></option>
            <option value="Southampton"></option>
            <option value="St Albans"></option>
            <option value="Stoke-on-Trent"></option>
            <option value="Sunderland"></option>
            <option value="Truro"></option>
            <option value="Wakefield"></option>
            <option value="Wells"></option>
            <option value="(City of) Westminster"></option>
            <option value="Winchester"></option>
            <option value="Wolverhampton"></option>
            <option value="Worcester"></option>
            <option value="York"></option>
          </select>
        </datalist>
        <span>Subject</span>
        <select name="subject" onChange={this.handleChange}>
          <option selected>All</option>
          <option>Science</option>
          <option>Engineering</option>
          <option>Technology</option>
          <option>Mathmatics</option>
        </select>
        <button className="search-button" value="Search" onClick={this.handleClick}>Search</button>
      </div>
    );
  }
}

export default Search;

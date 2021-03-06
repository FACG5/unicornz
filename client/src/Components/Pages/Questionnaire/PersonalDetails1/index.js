/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';
import './style.css';
import '../style.css';

const options = [

  { value: 'Art', label: 'Art' },
  { value: 'Maths', label: 'Maths' },
  { value: 'Science', label: 'Science' },
  { value: 'English Language', label: 'English Language' },
  { value: 'English Literature', label: 'English Literature' },
  { value: 'physics', label: 'physics' },
  { value: 'Biology', label: 'Biology' },
  { value: 'History', label: 'History' },
  { value: 'Geography', label: 'Geography' },
  { value: 'Design & technology', label: 'Design & technology' },
  { value: 'Business Studies', label: 'Business Studies' },
  { value: 'Chemistry', label: 'Chemistry' },
  { value: 'Classics', label: 'Classics' },
  { value: 'Computer Science', label: 'Computer Science' },
  { value: 'Drama', label: 'Drama' },
  { value: 'Economics', label: 'Economics' },
  { value: 'Business Management', label: 'Business Management' },
  { value: 'Health and Social Care', label: 'Health and Social Care' },
  { value: 'ICT', label: 'ICT' },
  { value: 'Latin', label: 'Latin' },
  { value: 'Law', label: 'Law' },
  { value: 'Media Studies', label: 'Media Studies' },
  { value: 'Modern Foreign Languages', label: 'Modern Foreign Languages' },
  { value: 'Music', label: 'Music' },
  { value: 'Physical Education', label: 'Physical Education' },
  { value: 'Politics', label: 'Politics' },
  { value: 'Psychology', label: 'Psychology' },
  { value: 'Religious Studies', label: 'Religious Studies' },
  { value: 'Philosophy', label: 'Philosophy' },
  { value: 'Social Sciences', label: 'Social Sciences' },
  { value: 'Statistics', label: 'Statistics' },
  { value: 'Welsh', label: 'Welsh' },
  { value: 'Other', label: 'Other' },

];

const fileMaxSize = 10485760; // byte

class PersonalDetails1 extends Component {
    state = {
      subjects: [],
      favsubjects: [],
      hobbies: '',
      futureJob: '',
      interestedJob: '',
      files: [],
      label: 'click to choose files',
    }


    componentWillMount = () => {
      const storage = localStorage.getItem('state') || '{}';
      const parsedStorage = JSON.parse(storage);
      this.setState({ ...parsedStorage });
    }

    handleSubjectChange = (subjects) => {
      this.setState({ subjects });
      this.props.handleChange({ target: { name: 'subjects', value: subjects } });
    }

    handleFavChange = (favsubjects) => {
      this.setState({ favsubjects }, () => {
        this.props.handleChange({ target: { name: 'favsubjects', value: favsubjects } });
      });
    }


    handleSubmit= (event) => {
      event.preventDefault();
    }

    handleFile = (e) => {
      this.setState({
        docs: e.target.files[0],
      });
    }

handleClick=() => {
  const { docs } = this.state;
  const formData = new FormData();
  formData.append('dox', this.state.docs);
  axios({
    method: 'post',
    url: '/api/v1/upload',
    data: formData,
  }).then((res) => {
    alert(res.data);
  }).catch((error) => {
    console.log('error:', error);
  });
  this.props.handleChange({ target: { name: 'dox', value: docs } });
}

render() {
  const storage = localStorage.getItem('state');
  const parsedStorage = JSON.parse(storage);
  const {
    subjects,
    favsubjects,
    futureJob,
    interestedJob,
    hobbies,
  } = parsedStorage;
  return (
    <div className="personal-details1">
      <h2 personal-details1-h>Now we've got the boring stuff out of the way, let's get to know more about your school studies</h2>
      <div className="personal-details1-content">
        <div className="personal1-content1">
          <p>What subjects are you studying? Tick all that apply</p>
          <Select
            className="select-input"
            onChange={this.handleSubjectChange}
            value={this.state.subjects}
            defaultValue={subjects}
            isMulti
            options={options}
          />
          <p>What are your favourite subjects Azara ? Tick up to 3</p>
          <Select
            className="select-input"
            onChange={this.handleFavChange}
            value={this.state.favsubjects}
            defaultValue={favsubjects}
            isMulti
            options={options}
          />
          <p>What are your interests and hobbies outside of school? Tell us everything you enjoy doing.</p>
          <textarea rows="5" cols="40" placeholder="Answer" name="hobbies" defaultValue={hobbies} onChange={this.props.handleChange}></textarea>
        </div>
        <div className="personal1-content2">
          <p>If you have a CV, or any other documents your school needs signed, please upload them to your dashboard</p>
          <input type="file" name="dox" onChange={this.handleFile} required />
          <button onClick={this.handleClick} className="upload-btn">Upload Documents</button>
          <p>Can you imagine your future career? What does it look like?</p>
          <textarea rows="5" cols="40" placeholder="Answer" name="futureJob" onChange={this.props.handleChange} defaultValue={futureJob}></textarea>
          <p>What kinds of jobs do you think will interest you?</p>
          <textarea rows="5" cols="40" placeholder="Answer" name="interestedJob" onChange={this.props.handleChange} defaultValue={interestedJob}></textarea>
        </div>
      </div>
    </div>


  );
}
}

export default PersonalDetails1;

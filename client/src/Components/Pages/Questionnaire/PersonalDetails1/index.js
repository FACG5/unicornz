import React, { Component } from 'react';
import Select from 'react-select';

import './style.css'
import '../style.css'

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

class PersonalDetails1 extends Component {

    state = {
        selectedOption: [], 
    }

    handleChange = (selectedOption) => {

        this.setState();
        
      }
      
    render() {
        return ( 
            <div className="container">
                <div className="third-section">
                    <h2>Now we've got the boring stuff out of the way, let's get to know more about your school studies</h2>
                    <div className="six-card">
                        <p>What subjects are you studying? Tick all that apply</p>
                        <Select
                            onChange={this.handleChange}
                            value={this.selectedOption}
                            isMulti={true}
                            options={options}
                        />
                        <p>What are your favourite subjects Azara ? Tick up to 3</p>
                        <Select
                            onChange={this.handleChange}
                            value={this.selectedOption}
                            isMulti={true}
                            options={options}
                        />
                        <p>What else do you enjoy at school? Tell us as much as you can.</p>
                        <textarea rows="5" cols="40" placeholder="Answer"></textarea>
                        <p>What are your interests and hobbies outside of school? Tell us everything you enjoy doing.</p>
                        <textarea rows="5" cols="40" placeholder="Answer"></textarea>
                    </div>
                    <div className="seventh-card">
                        <p>If you have a copy of your CV, please upload it to your dashboard</p>
                        <input type="file"/>
                        <p>Can you imagine your future career? What does it look like?</p>
                        <textarea rows="5" cols="40" placeholder="Answer"></textarea>
                        <p>What kinds of jobs do you think will interest you?</p>
                        <textarea rows="5" cols="40" placeholder="Answer"></textarea>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default PersonalDetails1;
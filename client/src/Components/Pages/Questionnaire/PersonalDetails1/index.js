import React, { Component } from 'react';
import Select from 'react-select';

import './style.css'
import '../style.css'

const options = [

    { value: 'Math', label: 'Math' },
    { value: 'Science', label: 'Science' },
    { value: 'English', label: 'English' },
    { value: 'physics', label: 'physics' },
    { value: 'Biology', label: 'Biology' },
    { value: 'calculus', label: 'calculus' },
    { value: 'history', label: 'history' },
    { value: 'Geographically', label: 'Geographically' },
    { value: 'technology', label: 'technology' },
  ];

class PersonalDetails1 extends Component {

    state = {
        selectedOption: null, 
    }

    handleChange = (selectedOption) => {

        this.setState({ selectedOption });
      }
      
    render() {
        const { selectedOption } = this.state; 
        return ( 
            <div>
                <div className="third-section">
                    <h2>Now we’ve got the boring stuff out of the way, let’s get to know you better</h2>
                    <div className="six-card">
                        <p>What subjects are you studying? Tick all that apply</p>
                        <Select
                            value={selectedOption}
                            isMulti={this.handleChange}
                            options={options}
                        />
                        <p>What are your favourite subjects Azara ? Tick up to 3</p>
                        <input type="text" className ="sec1-input"/>
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
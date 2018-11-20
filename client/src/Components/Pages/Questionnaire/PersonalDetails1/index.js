/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react';
import Select from 'react-select';
import Dropzone from 'react-dropzone'
import NextBtn from '../../../CommonComponents/Button'
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

  const fileMaxSize = 10485760  //byte

class PersonalDetails1 extends Component {

    state = {
        subjects: null, 
        favSubjects: null,
        enjoySchool: '',
        hobbies: '',
        futureJob: '',
        interestedJob: '',
        files:[],
        label:"choose files"
    }
    
    handleSubjectChange = (subjects)=> {
        this.setState({subjects}); 
      }

    handleFavChange = (favSubjects)=> {
        this.setState({favSubjects});
      }

    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({ 
            [name]: value
        });
      };
    
    handleSubmit= (event) => {
        event.preventDefault();
    
      }
    
    handleOnDrop = (files, rejectedFiles) => {

        if (rejectedFiles && rejectedFiles.length > 0) {
            const currentRejectFile = rejectedFiles[0];
            const currentRejectFileSize = currentRejectFile.size;
            
            
            if ( currentRejectFileSize > fileMaxSize) {
                alert('This file is too big..please choose another one with size less than 10 megabytes')
            }
        }
            const currentFile = files[0];
            const currentFileSize = currentFile.size;
            if ( currentFileSize > fileMaxSize) {
                alert('This file is too big..please choose another one with size less than 10 megabytes')
            
            }else{
            this.setState({files:files,label:files[0].name})
        }
    }
      
    render() {
        return ( 
            <div className="container personal-details1" >
                <div>
                    <h2>Now we've got the boring stuff out of the way, let's get to know more about your school studies</h2>
                    <div className="third-section">  
                        <div className="six-card">
                            <span className="num" id="num6">6</span>
                            <p>What subjects are you studying? Tick all that apply</p>
                            <Select
                                className="select-input"
                                onChange={this.handleSubjectChange}
                                value={this.state.subjects}
                                isMulti={true}
                                options={options}
                            />
                            <p>What are your favourite subjects Azara ? Tick up to 3</p>
                            <Select 
                                className="select-input"
                                onChange={this.handleFavChange}
                                value={this.state.favSubjects}
                                isMulti={true}
                                options={options}
                            />
                            <p>What else do you enjoy at school? Tell us as much as you can.</p>
                            <textarea rows="5" cols="40" placeholder="Answer" name="enjoySchool" onChange={this.onChange}></textarea>
                            <p>What are your interests and hobbies outside of school? Tell us everything you enjoy doing.</p>
                            <textarea rows="5" cols="40" placeholder="Answer" name="hobbies" onChange={this.onChange}></textarea>
                        </div>
                        <div className="seventh-card">
                            <span className="num" id="num7">7</span>
                            <p>If you have a copy of your CV, please upload it to your dashboard</p>
                            <Dropzone
                                className="drop-zone"
                                onDrop={this.handleOnDrop}
                                maxSize= {fileMaxSize}
                                multiple= {false}
                            >{this.state.label}</Dropzone>
                            <p>Can you imagine your future career? What does it look like?</p>
                            <textarea rows="5" cols="40" placeholder="Answer" name="futureJob" onChange={this.onChange}></textarea>
                            <p>What kinds of jobs do you think will interest you?</p>
                            <textarea rows="5" cols="40" placeholder="Answer" name="interestedJob" onChange={this.onChange}></textarea>
                            <h1 className="shape">&#9925;</h1>
                        </div>
                    </div>
                    <NextBtn className="button" name="next" value="next" />
                </div>
            </div>
         );
    }
}
 
export default PersonalDetails1;

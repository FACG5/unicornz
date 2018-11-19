/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react';
import Select from 'react-select';

import './style.css'
import '../style.css'

const options = [

    { value: 'Making money', label: 'Making money' },
    { value: 'Being able to do my favourite subjects and hobbies', label: 'Being able to do my favourite subjects and hobbies' },
    { value: 'Learning new things', label: 'Learning new things' },
    { value: 'Being able to have a career that works around children', label: 'Being able to have a career that works around children' },
 
];

class PersonalDetails2 extends Component {

    state = {
        selectedOption: null,
        famousEntrepreneur: '',
        BeEntrepreneur: '',
        entrepreneursWomen: '',
        importantInCareer1: null,
        importantInCareer2: '',
        importantInCareer3: '',
    }

    ImpInCareerSelector1 = (importantInCareer1) => {

        this.setState(importantInCareer1);
        console.log(this.state);
    }

    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({ 
            [name]: value
        });
    };

    // ImpInCareerSelector = () => {
    //    return <Select
    //     onChange={this.handleChange}
    //     value={this.value}
    //     options={options}
    //     />
    // }

    // ImpFactors = () => {
    //     return <Select
    //      onChange={this.handleChange}
    //      value={this.selectedOption}
    //      options={options}
    //      />
    //  }
      
    render() {
        return ( 
            <div className="container">
                <div>
                    <h2>Ok, so that's your school studies and hobbies done; now what's important in life to you ?</h2>
                    <div className="fourth-section">
                        <div className="eight-card">
                            <p>What do you think is most important to you in a career? Tick your top 3</p>
                                <Select
                                    placeholder="priority one"
                                    name="importantInCareer1"
                                    onChange={this.ImpInCareerSelector1}
                                    value={this.state.importantInCareer1}
                                    options={options}
                                />  
                                {/* <Select 
                                    placeholder="priority two" 
                                    name="importantInCareer2"
                                    onChange={this.ImpInCareerSelector2}
                                    value={this.state.importantInCareer2}
                                    options={options}
                                /> 
                                <Select 
                                    placeholder="priority three" 
                                    name="importantInCareer3"
                                    onChange={this.ImpInCareerSelector3}
                                    value={this.state.importantInCareer3}
                                    options={options}
                                /> */}
                            <p>What are the most important factors to you in taking a work experience or insight day with a company</p>
                            {/* <div>
                                <label>
                                    <input type="checkbox"/>Gain more confidence
                                </label>
                                <this.Selector /> 
                            </div>importantInCareer1
                            <div>
                                <label>
                                    <input type="checkbox"/>Gain experience of working
                                </label>
                                <this.Selector /> 
                            </div>
                            <div>
                                <label>
                                    <input type="checkbox"/>See how my favourite subjects work in a career
                                </label>
                                <this.Selector /> 
                            </div> */}
                        </div>
                        <div className="ninth-card">
                            <p>Can you name a famous entrepreneur?<span> (an entrepreneur creates and runs their own business)</span></p>
                            <input type="text" name="famousEntrepreneur" onChange={this.onChange}/>
                            <p>Do you think you could be an entrepreneur Answer YES Or NO && Why?</p>
                            <textarea rows="5" cols="40" placeholder="Answer" name="BeEntrepreneur" onChange={this.onChange}></textarea>
                            <p>Do you personally know any women that are entrepreneurs?</p>
                            <textarea rows="5" cols="40" placeholder="Answer" name="entrepreneursWomen" onChange={this.onChange} ></textarea>
                            <h1 className="shape">&#9925;</h1>
                        </div>
                    </div>
                </div>
                
            </div>
         );
    }
}

 
export default PersonalDetails2;
import React, { Component } from 'react';
import Select from 'react-select';

import './style.css'
import '../style.css'

const options = [

    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
 
];

class PersonalDetails2 extends Component {

    state = {
        selectedOption: null,
        famousEntrepreneur: '',
        BeEntrepreneur: '',
        entrepreneursWomen: '',
    }

    handleChange = (selectedOption) => {

        this.setState();
        
    }

    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({ 
            [name]: value
        });
    };

    Selector = () => {
       return <Select
        onChange={this.handleChange}
        value={this.selectedOption}
        options={options}
        />
    }
      
    render() {
        return ( 
            <div className="container">
                <div>
                    <h2>Ok, so that's your school studies and hobbies done; now what's important in life to you ?</h2>
                    <div className="fourth-section">
                        <div className="eight-card">
                            <p>What do you think is most important to you in a career? Tick your top 3</p>
                            <div>
                                <label>
                                    <input type="checkbox" />Making money   
                                </label>
                                <this.Selector />  
                            </div>
                            <div>
                                <label>
                                    <input type="checkbox"/>Being able to do my favourite subjects and hobbies 
                                </label>
                                <this.Selector /> 
                            </div>                        
                            <div>
                                <label>
                                    <input type="checkbox"/>Learning new things 
                                </label>
                                <this.Selector /> 
                            </div>                      
                            <div>
                                <label>
                                    <input type="checkbox"/>Being able to have a career that works around children
                                </label>
                                <this.Selector /> 
                            </div>

                            <p>What are the most important factors to you in taking a work experience or insight day with a company</p>
                            <div>
                                <label>
                                    <input type="checkbox"/>Gain more confidence
                                </label>
                                <this.Selector /> 
                            </div>
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
                            </div>
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
/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react';
import Select from 'react-select';
import NextBtn from '../../../CommonComponents/Button'
import './style.css'
import '../style.css'

const options1 = [

    { value: 'Making money', label: 'Making money' },
    { value: 'Being able to do my favourite subjects and hobbies', label: 'Being able to do my favourite subjects and hobbies' },
    { value: 'Learning new things', label: 'Learning new things' },
    { value: 'Being able to have a career that works around children', label: 'Being able to have a career that works around children' },
 
];

const options2 = [

    { value: 'Gain more confidence ', label: 'Gain more confidence' },
    { value: 'Gain experience of working', label: 'Gain experience of working' },
    { value: 'See how my favourite subjects work in a career', label: 'See how my favourite subjects work in a career' },
    
];

class PersonalDetails2 extends Component {

    state = {
        
        famousEntrepreneur: '',
        BeEntrepreneur: '',
        entrepreneursWomen: '',
        importantInCareer1: '',
        importantInCareer2: '',
        importantInCareer3: '',
        importantfactors1: '',
        importantfactors2: '',
        importantfactors3: ''
    }

    ImpInCareerSelector1 = (importantInCareer1) => {

        this.setState({importantInCareer1});
   
    }

    ImpInCareerSelector2 = (importantInCareer2) => {

        this.setState({importantInCareer2});
        console.log(this.state);
    }

    ImpInCareerSelector3 = (importantInCareer3) => {

        this.setState({importantInCareer3});
    }

    Impfactorselector1 = (importantfactor1) => {
        this.setState({importantfactor1});
    }

    Impfactorselector2 = (importantfactor2) => {
        this.setState({importantfactor2});
    }

    Impfactorselector3 = (importantfactor3) => {
        this.setState({importantfactor3});
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({ 
            [name]: value
        });
    };

    render() {
        return ( 
            <div className="container">
                <div>
                    <h2>Ok, so that's your school studies and hobbies done; now what's important in life to you ?</h2>
                    <div className="fourth-section">
                        <div className="eight-card">
                            <p>What do you think is most important to you in a career? Tick your top 3</p>
                                <div className="selector">
                                    <Select
                                        className="select-input"
                                        placeholder="priority one"
                                        name="importantInCareer1"
                                        onChange={this.ImpInCareerSelector1}
                                        value={this.state.importantInCareer1}
                                        options={options1}
                                    />
                                </div>
                                <div className="selector">
                                    <Select
                                        className="select-input" 
                                        placeholder="priority two" 
                                        name="importantInCareer2"
                                        onChange={this.ImpInCareerSelector2}
                                        value={this.state.importantInCareer2}
                                        options={options1}
                                    /> 
                                </div>
                                <div className="selector">
                                    <Select 
                                        className="select-input"
                                        placeholder="priority three" 
                                        name="importantInCareer3"
                                        onChange={this.ImpInCareerSelector3}
                                        value={this.state.importantInCareer3}
                                        options={options1}
                                    />
                                </div>
                                
                            <p>What are the most important factors to you in taking a work experience or insight day with a company</p>
                            <div className="selector">
                                <Select
                                    className="select-input"
                                    placeholder="priority one"
                                    name="importantInCareer1"
                                    onChange={this.Impfactorselector1}
                                    value={this.state.importantfactor1}
                                    options={options2}
                                />
                            </div>
                            <div className="selector">
                                <Select
                                    className="select-input" 
                                    placeholder="priority two" 
                                    name="importantInCareer2"
                                    onChange={this.ImpfactorSelector2}
                                    value={this.state.importantfactor2}
                                    options={options2}
                                /> 
                            </div>
                            <div className="selector">
                                <Select
                                    className="select-input" 
                                    placeholder="priority three" 
                                    name="importantInCareer3"
                                    onChange={this.ImpfactorSelector3}
                                    value={this.state.importantfactor3}
                                    options={options2}
                                />
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
                <div>
                    <NextBtn className="button"  value="NEXT" onClick={this.handleSubmit}/>
                </div>
                
            </div>
         );
    }
}

 
export default PersonalDetails2;
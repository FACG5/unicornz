import React, { Component } from 'react';
import { Wizard, Step } from './Wizard';
import BasicDetails1 from './BasicDetails1';
import BasicDetails2 from './BasicDetails2';
import PersonalDetails1 from './PersonalDetails1';
import PersonalDetails2 from './PersonalDetails2';
import FinalDetails from './FinalDetails';

import './style.css';


const MyStep = ({ children }) => (
  <div className="p-2 text-center">{children}</div>
);

class Questionnaier extends Component {
  state = { step: 0 };

  handleStep = (step) => {
    this.setState({ step });
  };

  saveState = () => {
    const { state } = this;
    const info = localStorage.setItem('state', JSON.stringify(state));
  }

handleChange=(e) => {
  const { value, name } = e.target;
  this.setState({
    ...this.state,
    [name]: value,
  });
  this.saveState();
}

render() {
  console.log('dddddd', this.state);
  const aValue = localStorage.getItem('state');
  console.log('ddddd123', JSON.parse(aValue));
  return (
    <div>
      <Wizard history={this.props.history} step={this.state.step} onChange={this.handleStep}>
        <Step title="First step" description="Welcome page">

          <BasicDetails1 handleChange={this.handleChange} />

        </Step>

        <Step title="Second step" description="BasicInfo">

          <BasicDetails2 handleChange={this.handleChange} />

        </Step>
        <Step title="Third step" description="PersonalInfo">
          <PersonalDetails1 handleChange={this.handleChange} />
        </Step>
        <Step title="Fourth step" description="PersonalInfo">
          <PersonalDetails2 handleChange={this.handleChange} />
        </Step>
        <MyStep title="Last step" description="Last Step">
          <FinalDetails handleChange={this.handleChange} />
        </MyStep>
      </Wizard>
    </div>
  );
}
}


export default Questionnaier;

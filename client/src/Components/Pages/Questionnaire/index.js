import React, { Component } from 'react';
import axios from 'axios';
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
  state = { step: 0, girlId: 0 };

  componentDidUpdate() {
    const { id } = this.props;
    if (this.state.girlId !== id) {
      this.setState({
        girlId: id,
      });
    }
  }

  handleStep = (step) => {
    this.setState({ step });
  };

  saveState = () => {
    const { state } = this;
    const info = localStorage.setItem('state', JSON.stringify(state));
  }

handleChange= async (e) => {
  // should clear the local storage
  const { value, name } = e.target;
  await this.setState({
    ...this.state,
    [name]: value,
  });
  this.saveState();
}

hanleUpdate() {
  const storage = localStorage.getItem('state') || '{}';
  const parsedStorage = JSON.parse(storage);
  console.log('data to send with axios...>', parsedStorage);
  axios({
    method: 'post',
    url: '/api/v1/questionnaire',
    data: parsedStorage,
  }).then((res) => {
  }).catch((error) => {
    console.log('error:', error);
  });
}

render() {
  const { id, updateLoggingInfo } = this.props;
  console.log('this.state..', this.state);
  const aValue = localStorage.getItem('state');
  console.log('localStorage..', JSON.parse(aValue));
  return (
    <div>
      <Wizard history={this.props.history} step={this.state.step} onChange={this.handleStep} hanleUpdate={this.hanleUpdate}>
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

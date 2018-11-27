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

  render() {
    return (
      <div>
        <Wizard step={this.state.step} onChange={this.handleStep}>
          <Step title="First step" description="Welcome page">

            <BasicDetails1 />

          </Step>

          <Step title="Second step" description="About">

            <BasicDetails2 />

          </Step>
          <Step title="third step" description="About">
            <PersonalDetails1 />
          </Step>
          <Step title="fourth step" description="About">
            <PersonalDetails2 />
          </Step>
          <MyStep title="Last step" description="Build your own!">
            <FinalDetails />
          </MyStep>
        </Wizard>
      </div>
    );
  }
}


export default Questionnaier;

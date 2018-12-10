import React, { Component } from 'react';
import axios from 'axios';
<<<<<<< HEAD
import alertify from 'alertifyjs';

=======
>>>>>>> 7260d397215ba2cd155050912b225ba66b3e5a79
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

  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  if (!parsedStorage.grade || parsedStorage.grade.trim() === '') {
    alertify.dialog('alert').set({ transition: 'fade', message: 'Please enter your grade on the first step' }).setHeader('<h3>No grade !</h3>').show();
  } else if (!parsedStorage.city || parsedStorage.city.trim() === '') {
    alertify.dialog('alert').set({ transition: 'fade', message: 'Please enter your city on the first step' }).setHeader('<h3>No city !</h3>').show();
  } else if (!parsedStorage.schoolEmail || parsedStorage.schoolEmail.trim() === '' || !validateEmail(parsedStorage.schoolEmail)) {
    alertify.dialog('alert').set({ transition: 'fade', message: 'Please enter a valid school E-mail on the first step' }).setHeader('<h3>No school email !</h3>').show();
  } else if (!parsedStorage.phoneNum) {
    alertify.dialog('alert').set({ transition: 'fade', message: 'Please enter your phone number on the first step' }).setHeader('<h3>No phone num !</h3>').show();
  // } else if (!(parsedStorage.emergencyEmail.trim() === '')) {
  //   if (!validateEmail(parsedStorage.emergencyEmail)) {
  //     alertify.dialog('alert').set({ transition: 'fade', message: 'Please enter a valid emergency E-mail on the second step' }).setHeader('<h3>No school email !</h3>').show();
  //   }
  }
  // } else {
  //   window.location = ('/dash');
  // }
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

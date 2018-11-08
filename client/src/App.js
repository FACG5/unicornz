import React, { Component } from 'react';
import Button from './Components/CommonComponents/Button'

import './App.css';
import BasicDetails from './Pages/Questionnaire/BasicDetails';
import PersonalDetails1 from './Pages/Questionnaire/PersonalDetails1';


class App extends Component {
  
	render() {
		return (
			<div className="App">
				<header className="App-header" />
				<BasicDetails />
				<PersonalDetails1 />
			</div>
		);
	}

}

export default App;

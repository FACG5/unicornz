import React, { Component } from 'react';
import { BrowserRouter,Route, Switch} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import LandingPage from './Pages/LandingPage';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer'
import workExperienceDetails from './Pages/WorkExpDetails';
import Signup from '../Components/Pages/SignUp';
import Login from '../Components/Pages/Login';
import workExperienceList from './Pages/WorkExpList';
import Category from '../Components/Pages/Category';
import Questionnaire from '../Components/Pages/Questionnaire';
// import Modal from 'react-responsive-modal';

// import Modal from 'react-modal';
import Modal from 'react-animated-modal';


import './App.css';



class App extends Component {

  state = {
    modalIsOpen: false,
    modal: '',
    loggedIn: 'loggedout',
    userInfo:null
  };
 


  
  refreshAppModalState = (modal,modalIsOpen)=>{
    this.setState({modal:modal,modalIsOpen:modalIsOpen})
    this.forceUpdate();
}

  updateLoggingInfo =() => {
    fetch('/checkauthentication', {
      method: 'GET',
      headers: {
          "Content-Type": "application/json; charset=utf-8"
      }
      }).then(res => res.json())
      .then(res => {
        this.setState({loggedIn:res.status,userInfo:res.token})
      })
  }


getModal = Currentmodal => {
  switch(Currentmodal) {
    case 'Login':
    return <Login refreshAppModalState={this.refreshAppModalState} 
                  updateLoggingInfo={this.updateLoggingInfo}/>
    case 'Signup':
    return <Signup />
    default:
  }
}

componentWillMount(){
  this.updateLoggingInfo();
}

  render() {
    const { open } = this.state;
    const CurrentModal = this.state.modal;
    return (
      <div className="App">
      <BrowserRouter>
       <div className='app-main'>
       <Header 
       className="app-header" 
       refreshAppModalState={this.refreshAppModalState} 
       loggedIn={this.state.loggedIn} 
       userInfo={this.state.userInfo}/>
       
              <Modal
                    visible={this.state.modalIsOpen}
                    closemodal={() => this.setState({ modalIsOpen: false })}
                    type="flipInX"
                >
                      {this.getModal(CurrentModal)}
                </Modal>

        <div className = "app-content">
          <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/dash" component={Dashboard}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/login" component={Login}/>
              <Route path="/workexperiencedetails" component={workExperienceDetails}/>
              <Route path="/category" component={Category}/>
              <Route path="/workexperiencelist" component={workExperienceList}/>
              <Route path="/Questionnaire" component={Questionnaire}/>
              <Route path = "*" component={LandingPage} />
            </Switch>
        </div>
       </div>
      </BrowserRouter>
      <Footer className="app-footer"/>
      </div>
    );
  }
}


export default App;

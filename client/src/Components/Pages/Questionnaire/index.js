import React, { Component } from 'react';
import BasicDetails from './BasicDetails';
import PersonalDetails1 from './PersonalDetails1';
import PersonalDetails2 from './PersonalDetails2';
import FinalDetails from './FinalDetails';
import NextBtn from '../../CommonComponents/Button';

import './style.css'


class Questionnaier extends Component {

    state ={
        activePageIndex: 1,
        btnvalue: 'Next'
    }
   
    onClickHandler = () => {
      if(this.state.activePageIndex ===4){
        this.props.history.push('/dash')
      }
        else if (this.state.activePageIndex ===3){
            this.setState ({ btnvalue: 'Finish',activePageIndex: this.state.activePageIndex + 1})
            } else {
                this.setState ({activePageIndex: this.state.activePageIndex + 1 }) 
            }  
    }


 SwitchFunction = (activePageIndex) => {
    switch (activePageIndex) {
      case 1:
        return <BasicDetails />;
      case 2:
        return <PersonalDetails1 />;
      case 3:
        return <PersonalDetails2 />;
      case 4:
        return <FinalDetails />;
      default: return <BasicDetails />;
    }
  };
    

    render() { 
        return (
             <div>
                {this.SwitchFunction(this.state.activePageIndex)}
                <NextBtn className = "button" value ={this.state.btnvalue} onClick={this.onClickHandler}/>
            </div>

          );
    }
}
 
export default Questionnaier;
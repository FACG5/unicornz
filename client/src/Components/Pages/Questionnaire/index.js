import React, { Component } from 'react';
import HeaderComp from '../../CommonComponents/Header/index';
import FooterComp from '../../CommonComponents/Footer/index';
import './style.css'
import BasicDetails from './BasicDetails';
import PersonalDetails1 from './PersonalDetails1';
import PersonalDetails2 from './PersonalDetails2';
import FinalDetails from './FinalDetails';
import NextBtn from '../../CommonComponents/Button';


class Questionnaier extends Component {
    state ={
        activePageIndex: 1,
    }
   
    onClickHandler = () => {
        if (this.state.activePageIndex ===1){
            this.setState ({activePageIndex: 2 })
            } else if (this.state.activePageIndex ===2) {
                this.setState ({activePageIndex: 3 })
            } else if (this.state.activePageIndex ===3) {
                this.setState ({activePageIndex: 4 })
            } else {
                this.setState ({activePageIndex: 1 }) 
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
               <HeaderComp />  

                {this.SwitchFunction()}
                <NextBtn className = "button" value ={this.handleBtnValue()} onClick={this.onClickHandler}/>
                <FooterComp />
            </div>
              
          );
    }
}
 
export default Questionnaier;
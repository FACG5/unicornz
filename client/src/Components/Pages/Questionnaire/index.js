import React, { Component } from 'react';
import PersonalDetails1 from './PersonalDetails1/index';
import BasicDetails from './BasicDetails/index';


import './style.css'

class Questionnaier extends Component {
    

    render() { 
        return (
             <div>
               <BasicDetails />
               <PersonalDetails1 />
                
            </div>
              
          );
    }
}
 
export default Questionnaier;
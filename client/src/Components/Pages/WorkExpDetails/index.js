import React, { Component } from 'react';
import CopmpanyContact from './CompanyContact';
import CompanyDescription from './CompanyDescription';
import WorkExpView from './WorkExpView';
import companyImage from './images/comlogo.png'
import companyImage1 from './images/girlstem.png'

import './style.css';

class workExperienceDetails extends Component {
  render() {
    return (
      <div className="detailsPage">
          <CompanyDescription companyImage = {companyImage} description = {"is a newly founded company in 2016 by a team of creative team that offers furniture and interior design in a very modern style .Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"} />
          <div className="twine">
          <CopmpanyContact className = "CopmpanyContact" companyName = {'Para Design'}
                           companyVision = {'Passion to innovate'}
                           facebook = {'/Paradesign.ps'}
                           email = {'Paradesign@gmail.com'}
                           inistagram = {'Paradesign'}
                           website = {'www.paradesign.ps'}
                           phone = {'+440000111'} />
             <div className="workview">
              <WorkExpView className = "workExpView" image1 = {companyImage1}
                        text1 = {'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'} />
            </div>
         </div>
      </div>
    );
  }
}

export default workExperienceDetails;

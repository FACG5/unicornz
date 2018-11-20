import React, { Component } from 'react';
import companyLogo from './images/companyLogo.png';
import Card from './Cards';
import SearchBar from '../../CommonComponents/SearchBar';
import './style.css';

class workExperienceList extends Component {
  render() {
    return (
     <div>
        <div className="welcomeworkexperience">
              <h1> Find work experience </h1>
        </div>
         
        <Card subjectName={'Mathmatics'} 
           companyLogo={companyLogo}
           expWorkTitle={'Transactions Business Apprenticeship Programme'} 
           country={'Lodon'}
           postCode={'+ 440'} 
           website={'www.unixornz.uk'} 
           startingDate={'10/1/2019'}
           endingDate={'20/1/2019'}
           pocketMoney={'15'} />

        <Card subjectName={'Mathmatics'} 
           companyLogo={companyLogo}
           expWorkTitle={'Transactions Business Apprenticeship Programme'} 
           country={'Lodon'}
           postCode={'+ 440'} 
           website={'www.unixornz.uk'} 
           startingDate={'10/1/2019'}
           endingDate={'20/1/2019'}
           pocketMoney={'15'} />

           <Card subjectName={'Mathmatics'} 
           companyLogo={companyLogo}
           expWorkTitle={'Transactions Business Apprenticeship Programme'} 
           country={'Lodon'}
           postCode={'+ 440'} 
           website={'www.unixornz.uk'} 
           startingDate={'10/1/2019'}
           endingDate={'20/1/2019'}
           pocketMoney={'15'} />

        <Card subjectName={'Mathmatics'} 
           companyLogo={companyLogo}
           expWorkTitle={'Transactions Business Apprenticeship Programme'} 
           country={'Lodon'}
           postCode={'+ 440'} 
           website={'www.unixornz.uk'} 
           startingDate={'10/1/2019'}
           endingDate={'20/1/2019'}
           pocketMoney={'15'} />
    </div>
    );
  }
}  

export default workExperienceList;

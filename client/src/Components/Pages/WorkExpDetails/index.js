import React, { Component } from 'react';
import axios from 'axios';
import CopmpanyContact from './CompanyContact';
import CompanyDescription from './CompanyDescription';
import WorkExpView from './WorkExpView';
import Button from '../../CommonComponents/Button'
import './style.css';

class workExperienceDetails extends Component {
  state = {
    id:'',
    description:'',
    video:'',
    logo:'',
    company_name:'',
    mobile:'',
    website:'',
    email:'',
    facebook:''
  }
  
  componentDidMount() {
    if (document.cookie) {
    console.log(this.props.match.params.id);
    
    axios.get(`/api/v1/workexperiencedetails/${this.props.match.params.id}`).then((res) => {  
      const info = res.data
      console.log("info : ",info);
      this.setState({ ...info });
    }).catch((error) => {
      console.log('error:', error);
    });
  } else {
    this.props.history.push('/');
  }
}

  render() {
    const {
    company = { logo },
    id,
    description,
    video,
    logo,
    company_name,
    mobile,
    website,
    email,
    facebook
  }= this.state;
    return (
      <div className="detailsPage">
          <CompanyDescription 
              companyImage={company.logo} 
              description={company.description} />
          <div className="twine">
          <CopmpanyContact className = "CopmpanyContact" 
                          companyName = {company.company_name}
                           facebook = {company.facebook}
                           email = {company.email}
                           website = {company.website}
                           phone = {company.mobile} />
             <div className="workview">
              <WorkExpView className = "workExpView"
              image1={company.logo}
              text1={description} />
            </div>
         </div>
          <button className="apply-btn" value= "APPLY NOW" >APPLY NOW</button>
      </div>
    );
  }
}

export default workExperienceDetails;

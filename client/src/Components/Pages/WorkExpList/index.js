import React, { Component } from 'react';
import axios from 'axios';
import Card from './Cards';
import './style.css';

class workExperienceList extends Component {
  state ={
           results:[],
           info:[]
  }
  componentDidMount() {
    axios.get('/api/v1/workexperiencelist').then((res) => {
      const info = res.data;   
      console.log(info);
      this.setState({info})   
      this.setState({ results:info });
    }).catch((error) => {
      console.log('error:', error);
    });
  }

  render() {
  const data = this.state.results;
    return (
     <div>
        <div className="welcomeworkexperience">
              <h1> Find work experience </h1>
        </div>
        <div className="cardLinks">
        {
           this.state.info.map((item) => {
             
             return(
            <Card 
            subjectName = {item.subject} 
            key={item.id}
            company_name = {item.company.company_name}
            companyLogo={item.company.logo}
            post_code={item.post_code}
            expWorkTitle={item.title} 
            max_number={item.max_number} 
            country={item.location}
            start_time={item.start_time} 
            end_time={item.end_time} 
            startingDate={item.start_date}
            endingDate={item.end_date}
            pocketMoney={item.pocket_money}
            id = {item.id} />
           )
          })
         }
        
        </div>
         
    </div>
    );
  }
}  

export default workExperienceList;

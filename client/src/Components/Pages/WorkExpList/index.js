import React, { Component } from 'react';
import axios from 'axios';
import Card from './Cards';
import './style.css';

class workExperienceList extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
    const { action } = this.props.history;
    if (action == 'REPLACE') {
      const { jobs } = this.props.location.state;
      this.setState({ results: jobs });
    } else {
      axios.get('/workexperiencelist').then((res) => {
        const info = res.data;
        this.setState({ results: info });
      }).catch((error) => {
        console.log('error:', error);
      });
    }
  }


  render() {
    const { results } = this.state;
    return (
      <div>
        <div className="welcomeworkexperience">
          <h1> Find work experience </h1>
        </div>
        <div className="cardLinks">
          {
           results.map(item => (
             <Card
               key={item.id}
               company_name={item.company.company_name}
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
             />
           ))
         }

        </div>

      </div>
    );
  }
}

export default workExperienceList;

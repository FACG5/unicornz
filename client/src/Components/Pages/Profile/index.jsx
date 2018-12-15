import React, { Component } from 'react';
import axios from 'axios';
import PrpfComp from './ProfComp';
import './style.css';

class workExperienceList extends Component {
  state = {
    results: [],
  };

  componentDidMount() {

        axios
          .get('/api/v1/workexperiencelist')
          .then((res) => {
            const info = res.data;
            this.setState({ results: info });
          })
          .catch((error) => {
            console.log('error:', error);
          });
   }

  render() {
    const { results } = this.state;
    return (
      <div className="profileData">
          {
        //    results.map(item => (
             <PrpfComp
            
             />
        //    ))
         }
      </div>
    );
  
}
}

export default workExperienceList;

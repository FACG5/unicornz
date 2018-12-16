import React, { Component } from 'react';
import axios from 'axios';
import PrpfComp from './ProfComp';
import 'react-circular-progressbar/dist/styles.css';

import './style.css';

class ProfilePage extends Component {
  state = { girlId: 0, results: {} };

  componentDidUpdate() {
    console.log('mnmn', this.props);
    const { id } = this.props;
    if (this.state.girlId !== id) {
      this.setState({
        girlId: id,
      });
      axios
        .get(`/api/v1/profile/${id}`)
        .then((res) => {
          const info = res.data;
          console.log('iiiiiiiii', info);
          this.setState({ results: info });
        })
        .catch((error) => {
          console.log('error:', error);
        });
    }
  }

  render() {
    const { results } = this.state;
    console.log('ahmad', results);
    const { subjects } = results;
    return (
      <div className="profilePage">
      <h1>Profile Page</h1>

        <PrpfComp
          firstName={results.first_name}
          lastName={results.last_name}
          email={results.email}
          school={results.school_id}
          birthDate={results.birthdate}
          grade={results.grade}
          city={results.city}
          schoolEmail={results.phone_num}
          emergency_name={results.emergency_name}
          phone_num={results.phone_num}
          emergency_num={results.phone_num}
          relation={results.relation}
          emergency_email={results.emergency_email}
          period={results.period}
          begin_date={results.begin_date}
          end_date={results.end_date}
          subjects={results.subjects}
         favsubjects = { results.favsubjects }
        //  hobbies = { results.hobbies}
          future_job={results.future_job}
          interested_job={results.interested_job}
          //  famous_entrepreneur= { results.famous_entrepreneur}
          files = {results.files}
          percentage = { results.percentage}
        />
      </div>
    );
  }
}

export default ProfilePage;

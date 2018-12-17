import React, { Component } from "react";
import axios from "axios";
import PrpfComp from "./ProfComp";
import "react-circular-progressbar/dist/styles.css";

import "./style.css";

class ProfilePage extends Component {
  state = { girlId: 0, results: {} };

  updateCurrentProps(id) {
    this.setState({
      girlId: id
    });
    console.log(id);
    axios
      .get(`/api/v1/profile/${id}`)
      .then(res => {
        const info = res.data;
        this.setState({ results: info });
      })
      .catch(error => {
        console.log("error:", error);
      });
  }

  componentDidMount() {
    this.updateCurrentProps(this.props.id);
  }

  componentDidUpdate(prevProps) {
    const { id } = this.props;
    if (prevProps.id !== id) {
      this.updateCurrentProps(id);
    }
  }

  render() {
    if (!document.cookie) {
      return (window.location = "/");
    }
    const { results } = this.state;
    const { school } = results;
    return (
      <div className="profilePage">
        <h1>Profile Page</h1>

        <PrpfComp
          firstName={results.first_name}
          lastName={results.last_name}
          email={results.email}
          school={school && school.name}
          birthDate={results.birthdate}
          grade={results.grade}
          city={results.city}
          schoolEmail={results.school_email}
          emergency_name={results.emergency_name}
          phone_num={results.phone_num}
          emergency_num={results.phone_num}
          relation={results.relation}
          emergency_email={results.emergency_email}
          period={results.period}
          begin_date={results.begin_date}
          end_date={results.end_date}
          subjects={results.subjects}
          favsubjects={results.favsubjects}
          hobbies={results.hobbies}
          future_job={results.future_job}
          interested_job={results.interested_job}
          //  famous_entrepreneur= { results.famous_entrepreneur}
          files={results.files}
          percentage={results.percentage}
        />
      </div>
    );
  }
}

export default ProfilePage;

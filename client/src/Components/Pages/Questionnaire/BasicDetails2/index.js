/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react';
import './style.css';
import '../style.css';

class BasicDetails2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emergencyName: '',
      relation: '',
      emergencyNum: '',
      emergencyEmail: '',
      period: '',
      beginDate: '',
      endDate: '',
    };
  }


    handleSubmit = (event) => {
      event.preventDefault();
      const data = this.state;
    }

    componentWillMount = () => {
      const storage = localStorage.getItem('state') || '{}';
      const parsedStorage = JSON.parse(storage);
      this.setState({ ...parsedStorage });
    }


    render() {
      const storage = localStorage.getItem('state') || '{}';
      const parsedStorage = JSON.parse(storage);
      const {
        emergencyName,
        relation,
        emergencyNum,
        emergencyEmail,
        period,
        beginDate,
        endDate,
      } = parsedStorage;
      return (
        <form onSubmit={this.handleSubmit} className="container basic-Details">
          <div className="basic-details2">
            <div className="basic-details2-content">
              <div className="basic2-content1">
                <h2>If you are signing up to do a work experience, please let us know  more about this</h2>
                <p>What month you expect your work experience to take place?</p>
                <input
                  type="month"
                  className="sec2-input"
                  name="period"
                  defaultValue={period}
                  onChange={this.props.handleChange}
                  placeholder="Enter the month"
                />
                <p>Please tell us the date your work experience should begin</p>
                <input
                  type="date"
                  className="sec2-input"
                  name="beginDate"
                  defaultValue={beginDate}
                  onChange={this.props.handleChange}
                />
                <p>Please tell us the date your work experience should end</p>
                <input
                  type="date"
                  className="sec2-input"
                  name="endDate"
                  defaultValue={endDate}
                  onChange={this.props.handleChange}
                />
                <h1 className="shape">&#9925;</h1>
              </div>
              <div className="basic2-content2">
                <h2>Your “In case of emergency” point of contact for when you take a work experience or insight day</h2>
                <p>Name</p>
                <input
                  type="text"
                  className="sec2-input"
                  name="emergencyName"
                  defaultValue={emergencyName}
                  onChange={this.props.handleChange}
                  placeholder="Enter the name"
                />
                <p>Their relationship to you</p>
                <input
                  type="text"
                  className="sec2-input"
                  name="relation"
                  defaultValue={relation}
                  onChange={this.props.handleChange}
                  placeholder="Enter the relationship"
                />
                <p>Their emergency contact number</p>
                <input
                  type="number"
                  className="sec2-input"
                  name="emergencyNum"
                  defaultValue={emergencyNum}
                  onChange={this.props.handleChange}
                  placeholder="Enter the contact number"
                />
                <p>Their email address</p>
                <input
                  type="email"
                  className="sec2-input"
                  name="emergencyEmail"
                  defaultValue={emergencyEmail}
                  onChange={this.props.handleChange}
                  placeholder="****@***.***"
                />
              </div>
            </div>
          </div>
        </form>
      );
    }
}

export default BasicDetails2;

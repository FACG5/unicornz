/* eslint-disable react/jsx-no-duplicate-props */
import React, { Component } from 'react';
import pic1 from '../pic1.jpg';
import pic2 from '../pic2.jpeg';
import pic3 from '../pic3.jpeg';
import pic4 from '../pic4.jpg';
import './style.css';
import '../style.css';


class FinalDetails extends Component {
    state = {

      personHaveCareer: '',
      clickedpic1: 'unclicked',
      clickedpic2: 'unclicked',
      clickedpic3: 'unclicked',
      clickedpic4: 'unclicked',
      pursueInTech: '',
      techs: [],
    }

    onclickhandlerpic1 = () => {
      if (this.state.clickedpic1 === 'clicked') {
        this.setState({ clickedpic1: 'unclicked' });
      } else {
        this.setState({ clickedpic1: 'clicked' });
      }
      this.props.handleChange({ target: { name: 'clickedpic1', value: this.state.clickedpic1 } });
    }

    onclickhandlerpic2 = () => {
      if (this.state.clickedpic2 === 'clicked') {
        this.setState({ clickedpic2: 'unclicked' });
      } else {
        this.setState({ clickedpic2: 'clicked' });
      }
      this.props.handleChange({ target: { name: 'clickedpic2', value: this.state.clickedpic2 } });
    }

    onclickhandlerpic3 = () => {
      if (this.state.clickedpic3 === 'clicked') {
        this.setState({ clickedpic3: 'unclicked' });
      } else {
        this.setState({ clickedpic3: 'clicked' });
      }
      this.props.handleChange({ target: { name: 'clickedpic3', value: this.state.clickedpic3 } });
    }

    onclickhandlerpic4 = () => {
      if (this.state.clickedpic4 === 'clicked') {
        this.setState({ clickedpic4: 'unclicked' });
      } else {
        this.setState({ clickedpic4: 'clicked' });
      }
      this.props.handleChange({ target: { name: 'clickedpic4', value: this.state.clickedpic4 } });
    }

      handleOptionChange = (changeEvent) => {
        this.setState({
          pursueInTech: changeEvent.target.value,
        });
        this.props.handleChange({ target: { name: 'pursueInTech', value: this.state.pursueInTech } });
      }


    handleFormSubmit= (formSubmitEvent) => {
      formSubmitEvent.preventDefault();
    }

    handleCheckChange=(e) => {
      let temp = [];
      const { name, checked } = e.target;
      if (checked) {
        temp = this.state.techs;
        temp.push(name);
      } else {
        temp = this.state.techs;
        for (let i = 0; i < temp.length; ++i) {
          if (temp[i] === name) {
            if (temp.indexOf(temp[i]) === temp.length - 1) {
              temp.pop();
            } else {
              for (let j = temp.indexOf(temp[i]); j < temp.length - 1; ++j) {
                temp[j] = temp[j + 1];
              }
              temp.pop();
            }
          } else {
            continue;
          }
        }
      }
      this.setState({
        techs: temp,
      });
      this.props.handleChange({ target: { name: 'techs', value: this.state.techs } });
    }


    render() {
      const { clickedpic1 } = this.state;
      const { clickedpic2 } = this.state;
      const { clickedpic3 } = this.state;
      const { clickedpic4 } = this.state;
      const { pursueInTech } = this.state;
      return (
        <form className="final-details" onSubmit={this.handleFormSubmit}>
          <h2>Great! We are nearly there. Now a couple of questions about tech, and then your profile will be complete and you can press submit :)</h2>
          <div className="final-details-content">
            <p>Technology increasingly being used in careers, which of these pictures do you think looks like a job in technology? Tick as many as you like</p>
            <div className="pics">
              <img src={pic1} className={clickedpic1} id="pic" alt="girl" onClick={this.onclickhandlerpic1} />
              <img src={pic2} className={clickedpic2} id="pic" alt="girl" onClick={this.onclickhandlerpic2} />
              <img src={pic3} className={clickedpic3} id="pic" alt="girl" onClick={this.onclickhandlerpic3} />
              <img src={pic4} className={clickedpic4} id="pic" alt="girl" onClick={this.onclickhandlerpic4} />
            </div>

            <p>How likely are you to pursue a career in technology?</p>
            <div className="Q-radio-btn">
              <label>
1
                <input
                  type="radio"
                  name="option1"
                  value="1"
                  checked={pursueInTech === '1'}
                  onChange={this.handleOptionChange}
                />
              </label>
              <label>
2
                <input
                  type="radio"
                  name="option2"
                  value="2"
                  checked={pursueInTech === '2'}
                  onChange={this.handleOptionChange}
                />
              </label>
              <label>
3
                <input
                  type="radio"
                  name="option3"
                  value="3"
                  checked={this.state.pursueInTech === '3'}
                  onChange={this.handleOptionChange}
                />
              </label>
              <label>
4
                <input
                  type="radio"
                  name="option4"
                  value="4"
                  checked={pursueInTech === '4'}
                  onChange={this.handleOptionChange}
                />
              </label>
              <label>
5
                <input
                  type="radio"
                  name="option5"
                  value="5"
                  checked={pursueInTech === '5'}
                  onChange={this.handleOptionChange}
                />
              </label>
            </div>
            <div>
              <p>Who do you know personally that has a career in technology?</p>
              <label>
                <input type="checkbox" name="parents" onChange={this.handleCheckChange} />
My parents
              </label>
              <label>
                <input type="checkbox" name="family" onChange={this.handleCheckChange} />
Family
              </label>
              <label>
                <input type="checkbox" name="friends" onChange={this.handleCheckChange} />
friends
              </label>
              <label>
                <input type="checkbox" name="neither" onChange={this.handleCheckChange} />
no one
              </label>
            </div>
          </div>
        </form>
      );
    }
}

export default FinalDetails;

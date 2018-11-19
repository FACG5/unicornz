/* eslint-disable react/jsx-no-duplicate-props */
import React, { Component } from 'react';
import pic1 from '../pic1.jpg'
import pic2 from '../pic2.jpeg'
import pic3 from '../pic3.jpeg'
import pic4 from '../pic4.jpg'
import './style.css'
import '../style.css'


class FinalDetails extends Component {

    state = {

        personHaveCareer:'',
        clickedpic1: "clicked",
        clickedpic2: "clicked",
        clickedpic3: "clicked",
        clickedpic4: "clicked",
        pursueTechCareer: null

    }

    onclickhandlerpic1 = () => {
        if(this.state.clickedpic1 === "clicked"){
            this.setState({clickedpic1:"unclicked"})
            }else{
                this.setState({clickedpic1:"clicked"})
        }  
    }

    onclickhandlerpic2 = () => {
        if(this.state.clickedpic2 === "clicked"){
            this.setState({clickedpic2:"unclicked"})
            }else{
            this.setState({clickedpic2:"clicked"})
        }
    }

    onclickhandlerpic3 = () => {
        if(this.state.clickedpic3 === "clicked"){
            this.setState({clickedpic3:"unclicked"})
            }else{
            this.setState({clickedpic3:"clicked"})
        }  
    }

    onclickhandlerpic4 = () => {
        if(this.state.clickedpic4 === "clicked"){
        this.setState({clickedpic4:"unclicked"})
            }else{
            this.setState({clickedpic4:"clicked"})
        }
    }
    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({ 
            [name]: value
        });
      };
    
      handelRadioChange = (e) => {
          const {name} = e.target;
          this.setState({ 
            [name]: this.state.pursueTechCareer  
        });
        console.log(this.state);
      };
      

    render() { 
        const { clickedpic1 } = this.state;
        const { clickedpic2 } = this.state;
        const { clickedpic3 } = this.state;
        const { clickedpic4 } = this.state;
        return ( 
            <div className="container">
                <h2>Great! We're nearly there. Now a couple of questions about tech, and then your profile will be complete and you can press submit :)</h2>
                <div className="tenth-card">
                    <p>Which of these pictures do you think looks like a job in technology? Tick as many as you like</p>
                    <div className="pics">
                        <img src = {pic1} className = {clickedpic1} id="pic" alt ="girl" onClick={this.onclickhandlerpic1}/>
                        <img src = {pic2} className = {clickedpic2} id="pic" alt ="girl" onClick={this.onclickhandlerpic2}/>
                        <img src = {pic3} className = {clickedpic3} id="pic" alt ="girl" onClick={this.onclickhandlerpic3}/>
                        <img src = {pic4} className = {clickedpic4} id="pic" alt ="girl" onClick={this.onclickhandlerpic4}/>
                    </div>

                    <p>How likely are you to pursue a career in technology?</p>
                    <div>
                        <label>1
                            <input type="radio" name="1" onClick={this.handelRadioChange}/>
                        </label>
                        <label>2
                            <input type="radio" name="2" onClick={this.handelRadioChange}/>
                        </label>
                        <label>3
                            <input type="radio" name="3" onClick={this.handelRadioChange}/>
                        </label>
                        <label>4
                            <input type="radio" name="4" onClick={this.handelRadioChange}/>
                        </label>
                        <label>5
                            <input type="radio" name="5" onClick={this.handelRadioChange}/>
                        </label>
                    </div>
                    <div>
                        <p>Who do you know personally that has a career in technology?</p>
                        <input type="text" placeholder="Enter her/his name" name="personHaveCareer" onChange={this.onChange}/>
                    </div>
                </div>   
            </div>
         );
    }
}
 
export default FinalDetails;
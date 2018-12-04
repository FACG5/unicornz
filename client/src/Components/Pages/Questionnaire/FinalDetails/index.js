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
        clickedpic1: "unlicked",
        clickedpic2: "unclicked",
        clickedpic3: "unclicked",
        clickedpic4: "unclicked",
        pursueInTech: "",
        

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


      handleOptionChange = (changeEvent) => {
        this.setState({
            pursueInTech: changeEvent.target.value 
        });
        
      }


    handleFormSubmit= (formSubmitEvent) => {
        formSubmitEvent.preventDefault();
    }  

    render() { 
        const { clickedpic1 } = this.state;
        const { clickedpic2 } = this.state;
        const { clickedpic3 } = this.state;
        const { clickedpic4 } = this.state;
        return ( 
            <form className="final-details" onSubmit={this.handleFormSubmit} >
                <h2>Great! We're nearly there. Now a couple of questions about tech, and then your profile will be complete and you can press submit :)</h2>
                <div className="final-details-content">
                    <p>Technology increasingly being used in careers, which of these pictures do you think looks like a job in technology? Tick as many as you like</p>
                    <div className="pics">
                        <img src= {pic1} className = {clickedpic1} id="pic" alt ="girl" onClick={this.onclickhandlerpic1}/>
                        <img src = {pic2} className = {clickedpic2} id="pic" alt ="girl" onClick={this.onclickhandlerpic2}/>
                        <img src = {pic3} className = {clickedpic3} id="pic" alt ="girl" onClick={this.onclickhandlerpic3}/>
                        <img src = {pic4} className = {clickedpic4} id="pic" alt ="girl" onClick={this.onclickhandlerpic4}/>
                    </div>

                    <p>How likely are you to pursue a career in technology?</p>
                    <div className="Q-radio-btn">
                        <label>1
                            <input 
                                type="radio"
                                name="1" 
                                value="option1" 
                                checked={this.state.pursueInTech === 'option1'} 
                                onChange={this.handleOptionChange} 
                            />
                        </label>
                        <label>2
                        <input 
                            type="radio"
                            name="2" 
                            value="option2" 
                            checked={this.state.pursueInTech === 'option2'} 
                            onChange={this.handleOptionChange} 
                        />
                        </label>
                        <label>3
                        <input 
                            type="radio"
                            name="3" 
                            value="option3" 
                            checked={this.state.pursueInTech === 'option3'} 
                            onChange={this.handleOptionChange} 
                        />
                        </label>
                        <label>4
                        <input 
                            type="radio"
                            name="4" 
                            value="option4" 
                            checked={this.state.pursueInTech === 'option4'} 
                            onChange={this.handleOptionChange} 
                        />
                        </label>
                        <label>5
                        <input 
                            type="radio"
                            name="5" 
                            value="option5" 
                            checked={this.state.pursueInTech === 'option5'} 
                            onChange={this.handleOptionChange} 
                        />
                        </label>
                    </div>
                    <div>
                        <p>Who do you know personally that has a career in technology?</p>
                        <label><input type="checkbox"/>My parents</label>
                        <label><input type="checkbox"/>Family</label>
                        <label><input type="checkbox"/>friends</label>
                        <label><input type="checkbox"/>no one</label>
                    </div>
                </div> 
            </form>
         );
    }
}
 
export default FinalDetails;

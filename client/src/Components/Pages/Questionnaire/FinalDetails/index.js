import React, { Component } from 'react';
import pic1 from '../pic1.jpg'
import pic2 from '../pic2.jpeg'
import pic3 from '../pic3.jpeg'
import pic4 from '../pic4.jpg'
import './style.css'
import '../style.css'


class CheckboxImage extends Component {

        state = {
            clicked: "clicked"
        }  

        onclickhandler = () => {
            if(this.state.clicked === "clicked")
            this.setState({clicked:"unclicked"})
            else
            this.setState({clicked:"clicked"})
        }
    
    render() {
        const { src } = this.props;
        const { clicked } = this.state;
        return <img src = {src} className = {clicked} onClick={this.onclickhandler} alt ="girl"/>
    }
}


class FinalDetails extends Component {


    render() { 
        
        return ( 
            <div className="container">
                <p>Great! We're nearly there. Now a couple of questions about tech, and then your profile will be complete and you can press submit :)</p>
                <div className="tenth-card">
                    <p>Which of these pictures do you think looks like a job in technology? Tick as many as you like</p>
                    <CheckboxImage src = {pic1} />
                    <CheckboxImage src = {pic2} />
                    <CheckboxImage src = {pic3} />
                    <CheckboxImage src = {pic4} />
                    <p>How likely are you to pursue a career in technology?</p>
                    <label>1
                        <input type="radio"/>
                    </label>
                    <label>2
                        <input type="radio"/>
                    </label>
                    <label>3
                        <input type="radio"/>
                    </label>
                    <label>4
                        <input type="radio"/>
                    </label>
                    <label>5
                        <input type="radio"/>
                    </label>
                    <p>Who do you know personally that has a career in technology?</p>
                    <input type="text" placeholder="Enter her/his name"/>
                </div>   
            </div>
         );
    }
}
 
export default FinalDetails;
import React, { Component } from 'react';
import './style.css'
import '../style.css'

class BasicDetails2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            emergencyName: '',
            relation: '',
            emergencyNum: '',
            emergencyEmail: '',
            period: '',
            beginDate: '',
            endDate: '',
        }
    }


    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state
        console.log('data', data);
        
    }


  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ 
        [name]: value
    });
  };
    
    render() {

        return (
                <form onSubmit={this.handleSubmit} className='container basic-Details'>
                    <div className="second-section">
                        <div className="second-section-cards">
                            <div>
                                <h2>Your “In case of emergency” point of contact for when you take a work experience or insight day</h2>
                                <div className="fourth-card">
                                    <span className="num" id="num4">4</span>
                                    <p>Name</p>
                                    <input
                                        type="text"
                                        className ="sec2-input"
                                        name = "emergencyName"
                                        onChange={this.onChange}
                                    />
                                    <p>Their relationship to you</p>
                                    <input
                                        type="text"
                                        className ="sec2-input"
                                        name = "relation"
                                        onChange={this.onChange}
                                    />
                                    <p>Their emergency contact number</p>
                                    <input
                                        type="number"
                                        className ="sec2-input"
                                        name = "emergencyNum"
                                        onChange={this.onChange}
                                    />
                                    <p>Their email address</p>
                                    <input
                                        type="email"
                                        className ="sec2-input"
                                        name = "emergencyEmail"
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <h2>If you are signing up to do a work experience,please let us know  more about this</h2>
                                <div className="fifth-card">
                                    <span className="num" id="num5">5</span>
                                    <p>What month you expect your work experience to take place?</p>
                                    <input
                                        type="month"
                                        className ="sec2-input"
                                        name = "period"
                                        onChange={this.onChange}
                                    />
                                    <p>Please tell us the date your work experience should begin</p>
                                    <input 
                                        type="date"
                                        className ="sec2-input"
                                        name = "beginDate"
                                        onChange={this.onChange}
                                    />
                                    <p>Please tell us the date your work experience should end</p>
                                    <input
                                        type="date"
                                        className ="sec2-input"
                                        name = "endDate"
                                        onChange={this.onChange}
                                    />
                                    <h1 className="shape">Cool&#9786;</h1>
                                </div>
                            </div>
                        </div>
       
                    </div>
                    </form>
         );
    }
}

export default BasicDetails2;

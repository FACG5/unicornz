import React, {
    Component
} from 'react';
import './style.css'
import '../style.css'

class BasicDetails1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            grade: '',
            city: '',
            personalEmail: '',
            phoneNum: '',
    };
  }

    onChange = (e) => {
        const {
            name,
            value,
        } = e.target;
        this.setState({
            [name]: value
        });
    };

    render() {

        return ( <
            form onSubmit = {
                this.handleSubmit
            } >
            <
            div className = 'basic-details1' >
            <
            h2 > Hello, Please fill out these basic details and then we will move on to the interesting stuff < /h2> <
            p > What is your current Year Group at Gaza Girls School ? < /p> <
            input type = "text"
            className = "sec1-input"
            name = "grade"
            onChange = {
                this.onChange
            }
            placeholder = "Enter your grade .." /
            >
            <
            p > In which city exactly do you live ? < span className = "special-txt" > (we need this to work out how far you have to travel to your workexperience
                    if needed) < /span></p >
                <
                input
            type = "text"
            className = "sec1-input"
            name = "city"
            onChange = {
                this.onChange
            }
            placeholder = "Enter your city name .." /
            >
            <
            p > School email address < /p> <
            input type = "email"
            className = "sec1-input"
            name = "personalEmail"
            onChange = {
                this.onChange
            }
            placeholder = "***@**.***" /
            >
            <
            p > Mobile phone number < /p> <
            input type = "text"
            className = "sec1-input"
            name = "phoneNum"
            onChange = {
                this.onChange
            }
            placeholder = "Enter ypur phone no." /
            >
            <
            /div> <
            /form>
        );
    }
}

export default BasicDetails1;

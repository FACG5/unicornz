
import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/lib/'
import alertify from 'alertifyjs'
import { withRouter } from "react-router";

import './style.css'

class WorkExpFill extends Component{
state = {
      location:null,
      subject: null,
      post_code: null,
      start_date: null,
      end_date: null,
      pocket_money: null,
      title:null,
      max_number: null,
      description: null,
      start_time: null,
      end_time: null,
      company_id:null,
      company_options: [],
      password:null
}

componentWillMount(){
  fetch('/api/v1/getcompanieslist').then(res => res.json())
  .then(res => this.setState({company_options:res}))
}

companyListChangeHandle = (selectedoption) => {
  this.setState({company_id:selectedoption},()=>{
  });
}

onBackToMenueClickHandler = () =>{
    this.props.history.push('/');
}

onSubmitClickHandler =() =>{

    if(!this.state.company_id){
        alertify.dialog('alert').set({transition:'fade',message: 'Please chose a company'}).setHeader('<h3>chose a company!</h3>').show(); 
    }else if (!this.state.password){
        alertify.dialog('alert').set({transition:'fade',message: 'Please enter the password'}).setHeader('<h3>Password!</h3>').show(); 
    }else if (!this.state.title || this.state.title.trim() ===''){
        alertify.dialog('alert').set({transition:'fade',message: 'Please enter the title of the job'}).setHeader('<h3>Job Title!</h3>').show(); 
    }else if (!this.state.location || this.state.location.trim()==='' ){
        alertify.dialog('alert').set({transition:'fade',message: 'Please enter the location of the job'}).setHeader('<h3>Job Location!</h3>').show(); 
    }else if (!this.state.start_date){
        alertify.dialog('alert').set({transition:'fade',message: 'Please enter the starting date'}).setHeader('<h3>Start Date!</h3>').show(); 
    }else if (!this.state.end_date){
        alertify.dialog('alert').set({transition:'fade',message: 'Please enter the ending date'}).setHeader('<h3>Ending date!</h3>').show(); 
    }else  {
    fetch('/submitjob', {
        method: 'POST',
        body: JSON.stringify({
            location:this.state.location,
            subject: this.state.subject,
            post_code: this.state.post_code,
            start_date: this.state.start_date,
            end_date: this.state.end_date,
            pocket_money: this.state.pocket_money,
            title:this.state.title,
            max_number: this.state.max_number,
            description: this.state.description,
            start_time: this.state.start_time,
            end_time: this.state.end_time,
            company_id:this.state.company_id.value,
            password:this.state.password
      }),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    }).then(res => res.json())
    .then(res => {
        if(res.status==='success'){
            alertify.dialog('alert').set({transition:'fade',message: 'Job Submitted Successfuly'}).setHeader('<h2>Success</h2>').show(); 
            // this.props.refreshAppModalState(null,false);
        } else {
            alertify.set('notifier','position', 'top-center');
            alertify.error(`Submitting failed: ${res.msg}`)
        }
    })

    } 
}
    render(){
        return (
            <div className="container workexpfill">
                <h2>Fill Job Details</h2>
                    <div className="formgroup">
                        <label >Company</label>
                        <Select
                            className="react-select"
                            value={this.state.company_id}
                            onChange={this.companyListChangeHandle}
                            options={this.state.company_options}
                        />
                    </div>
                
                    <div className="formgroup">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password" onKeyUp={(e)=>{this.setState({password:e.target.value})}}/>
                    </div>

                    <div className="formgroup">
                        <label>Title</label>
                        <input type="text" className="form-control" placeholder="Title" onKeyUp={(e)=>{this.setState({title:e.target.value})}}/>
                    </div>

                    <div className="formgroup">
                        <label>Subject</label>
                        <input type="text" className="form-control" placeholder="Subject" onKeyUp={(e)=>{this.setState({subject:e.target.value})}}/>
                    </div>

                    <div className="formgroup">
                        <label>Description</label>
                        <input type="textarea" className="form-control" placeholder="Description" onKeyUp={(e)=>{this.setState({description:e.target.value})}}/>
                    </div>

                    <div className="formgroup">
                        <label>Location of Work</label>
                        <input type="text" className="form-control" placeholder="Location" onKeyUp={(e)=>{this.setState({location:e.target.value})}}/>
                    </div>
                    <div className="formgroup">
                        <label>Post code</label>
                        <input type="text" className="form-control" placeholder="Post code" onKeyUp={(e)=>{this.setState({post_code:e.target.value})}}/>
                    </div>

                    <div className="formgroup">
                        <label>Starts on</label>
                        <input type="date" className="form-control" onChange={(e)=>{this.setState({start_date:e.target.value})}}/>
                    </div>

                    <div className="formgroup">
                    <label>Ends on</label>
                        <input type="date" className="form-control" onChange={(e)=>{this.setState({end_date:e.target.value})}}/>
                    </div>

                    <div className="formgroup">
                    <label>Work starts at</label>
                        <input type="time" className="form-control" onChange={(e)=>{this.setState({start_time:e.target.value})}}/>
                    </div>

                    <div className="formgroup">
                    <label>Work ends at</label>
                        <input type="time" className="form-control" onChange={(e)=>{this.setState({end_time:e.target.value})}}/>
                    </div>

                    <div className="formgroup">
                    <label>Pocket money</label>
                        <input type="decimal" className="form-control" onKeyUp={(e)=>{this.setState({pocket_money:e.target.value})}}/>
                    </div>


                    <div className="formgroup">
                    <label>Number needed</label>
                        <input type="number" className="form-control" onChange={(e)=>{this.setState({max_number:e.target.value})}}/>
                    </div>

                    <div className="formgroup submitbtn">
                        <div className="labeldiv">
                        </div>
                        <div className="inputdiv">
                            <input type="submit" className="btn btn-primary  form-control" onClick={this.onSubmitClickHandler}/>
                            <button type="submit" className="btn btn-primary  form-control" onClick={this.onBackToMenueClickHandler}>Back to menue</button>
                        </div>
                    </div>

            </div>
        );
    }
}


export default withRouter(WorkExpFill);


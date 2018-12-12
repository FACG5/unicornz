import React, { Component } from 'react';
import axios from 'axios';

class Upload extends Component {
  state={
  }


  handleFile = (e) => {
    this.setState({
      docs: e.target.files[0],
    });
  }

    handleClick =() => {
      const { docs } = this.state;
      const formData = new FormData();
      formData.append('dox', this.state.docs);
      axios({
        method: 'post',
        url: '/api/v1/upload',
        data: formData,
      }).then((res) => {
        this.setState({
          message: res.data,
        });
        window.location = '/dash';
      }).catch((error) => {
        console.log('error:', error);
      });
    }

    render() {
      const { message } = this.state;
      if (!this.props.userInfo) {
        return <div>loading...</div>;
      }
      const links = this.props.userInfo[0].files;

      return (
        <div className="file-upload">
          <ul>
            <span>Your files</span>
            {
          links && links.map((val, key) => (
            <li><a href={val} target="_blank">{val.split('/')[3]}</a></li>
          ))
      }
          </ul>
          <div className="upload-zone">
            <input type="file" name="dox" onChange={this.handleFile} required />
            <button onClick={this.handleClick}>Upload Documents</button>
          </div>
          { message && (
          <h1>
            {' '}
            {message}
            {' '}
          </h1>
          ) }
        </div>
      );
    }
}
export default Upload;

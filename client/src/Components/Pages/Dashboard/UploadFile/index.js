import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
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
      console.log('file:::', docs);
      const formData = new FormData();
      formData.append('dox', this.state.docs);
      axios({
        method: 'post',
        url: '/api/v1/upload',
        data: formData,
      }).then((res) => {
        console.log(res.data);
        this.setState({
          message: res.data,
        });
      }).catch((error) => {
        console.log('error:', error);
      });
    }

    render() {
      const { message } = this.state;
      return (
        <div className="file-upload">
          <input type="file" name="dox" onChange={this.handleFile} required />
          <button onClick={this.handleClick}>Upload Documents</button>
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

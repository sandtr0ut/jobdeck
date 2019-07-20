import React from "react";
import axios from "axios";
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";

class Upload extends React.Component {
  state = {
    selectedFile: null
  };
  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
    console.log(event.target.files[0]);
  };

  //   fileUploadHandler = () => {
  //     axios.post("/upload");
  //   };
  render() {
    return (
      <div>
        <input type="file" onChange={this.fileSelectedHandler} />
        <button onClick={this.fileUploadHandler}>Upload</button>
        <FilePond server="http://localhost:3000" />
      </div>
    );
  }
}
export default Upload;

import React, { Component } from "react";
import axios from "axios";
class Aws3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      success: false,
      url: ""
    };
  }

  handleFileUpload = event => {
    const file = Array.from(event.target.files)[0];
    console.log("FILE:", file);
    this.setState({ file: file, success: false, url: "" });
  };
  // Perform the upload
  handleUpload = event => {
    const { file } = this.state;
    // // Split the filename to get the name and type
    let fileParts = file.name.split(".");
    let fileName = fileParts[0];
    let fileType = fileParts[1];
    console.log("Preparing the upload");
    axios
      .post("/api/uploads", {
        fileName,
        fileType
      })
      .then(response => {
        var returnData = response.data.data.returnData;
        var signedRequest = returnData.signedRequest;
        console.log("signedRequest", signedRequest);
        var url = returnData.url;
        this.setState({ url: url });

        // Put the fileType in the headers for the upload
        // var options = {
        //   headers: {
        //     "Content-Type": fileType
        //   }
        // };
        console.log("file", file);
        axios
          .put(signedRequest, file)
          .then(result => {
            console.log("Response from s3: " + result);
            this.setState({ success: true });
          })
          .catch(error => {
            alert("ERROR " + JSON.stringify(error));
          });
      })
      .catch(error => {
        alert(JSON.stringify(error));
      });
  };

  render() {
    const Success_message = () => (
      <div style={{ padding: 50 }}>
        <h3 style={{ color: "green" }}>SUCCESSFUL UPLOAD</h3>
        <a href={this.state.url}>Access the file here</a>
        <br />
      </div>
    );
    return (
      <div>
        <center>
          <h1>UPLOAD A FILE</h1>
          {this.state.success ? Success_message : null}
          <input
            onChange={this.handleFileUpload}
            ref={ref => {
              this.uploadInput = ref;
            }}
            type="file"
          />
          <br />
          <button onClick={this.handleUpload}>UPLOAD</button>
        </center>
      </div>
    );
  }
}
export default Aws3;

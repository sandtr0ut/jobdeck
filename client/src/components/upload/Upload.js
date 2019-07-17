import React from "react";
import axios from "axios";
class Upload extends React.Component {
    state = {
        selectedFile: null
    }
    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
        console.log(event.target.files[0]);
    }

    fileUploadHandler = () => {
        axios.post("/upload")
    }
    render() {
        return(
            <div>
            <input type="file" onChange={this.fileSelectedHandler}/>
            <button onClick={this.fileUploadHandler} />
            </div>
        )
    }
}
    export default Upload;
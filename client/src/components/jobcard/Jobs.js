import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import Card from './DynamicCard'


class Jobsearch extends React.Component{

  
  state = {
    image: "",
    match: false,
    matchCount: 0
  };
  componentDidMount(){
    this.loadNextJob();
  }

  handleBtnClick = event =>{
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    const newState = {...this.state};
    

    if (btnType = "pick"){
      newState.match = 1 ===Math.floor(Math.random()*5)+1;

      newState.matchCount = newState.match ? newState.matchCount + 1 : newState.matchCount
    } else {newstate.match = false}

    this.setState(newState);
    this.loadNextJob();

  }

  loadNextJob = () =>{
    API.getNewJob()
    .then(res => 
      this.setState({
        jobTitle: res.data.jobTitle,
        company: res.data.companyName,
        jobType: res.data.jobType,
        location: res.data.workLocation,
        salary: res.data.salary,
        summary: res.data.jobDescription,
        keySkills: res.data.keySkills,
        datePosted: res.data.posted,
      })).catch(err => console.log(err))
  }

  render(){
    return(
      <React.Fragment>
        <Card handleBtnClick={this.handleBtnClick} 
        jobTitle={this.state.jobTitle} 
        company={this.state.company} 
        location={this.state.location} 
        salary={this.state.salary} 
        summary={this.state.summary} 
        
        />
      </React.Fragment>
    )
  }
}


// const Jobsearch = ({
//     // cardContents: {
//     //     jobTitle:,
//     //     company: { name, logo },
//     //     location,
//     //     salary,
//     //     summary
//     // }
// }) => {
//     return (
//         <div>
//           <h2 className="large text-primary" >Find your perfect career today!</h2>
//           <Card/>
//         </div>

//         )
// }


export default Jobsearch;


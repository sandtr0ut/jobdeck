import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from './Card'
import API from '../../../../routes/api/jobCards'
// import Jobsearch from './Jobs';


class DynamicJobs extends Component {
  state = {
    jobTitle: "",
    workLocation: "",
    jobDescription: "",
    jobType: "",
    desiredExperience: "",
    salary: "",
    keySkills: "",
  };

  handleBtnClick = event => {
    console.log(event)
  };

  loadNextJob = () => {
    API.getRandomJob()
      .then(res =>
        this.setState({

        })).catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h2 className="large text-primary" >Find your perfect career today!</h2>
        <Card />
      </div>
    )
  }
}




export default DynamicJobs
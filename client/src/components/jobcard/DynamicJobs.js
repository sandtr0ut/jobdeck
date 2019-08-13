import React, { Fragment, useEffect } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from './Card'
// import API from '../../../../routes/api/jobCards'
import Spinner from "../layout/Spinner";
import { getProfiles } from "../../actions/profile";
// import Jobsearch from './Jobs';





const Jobs =({getProfiles, profile:{profiles, loading}}) => {
  useEffect(()=> {
    getProfiles();
  }, [getProfiles]);
  return(
    <Fragment>
      {loading ?(<Spinner />) : (
        <Fragment>
           <h1 className="large text-primary">Jobsearch</h1>
          <p className="lead">
            <i className="fab fa-connectdevelop" /> Find Your Perfect Job</p>
          <div className="profiles">
            {profiles.length > 0 ? (
              profiles.map(profile => (
                <Card key={profile} profile={profile} />
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </Fragment>

      )}
    </Fragment>
  )
};

Jobs.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Jobs);

// class DynamicJobs extends Component {

//   const

// }




// export default Jobs
  // state = {
  //   jobTitle: "",
  //   workLocation: "",
  //   jobDescription: "",
  //   jobType: "",
  //   desiredExperience: "",
  //   salary: "",
  //   keySkills: "",
  // };
  
  // handleBtnClick = event => {
  //   console.log(event)
  // };
  
  // loadNextJob = () => {
  //   API.getRandomJob()
  //     .then(res =>
  //       this.setState({
  
  //       })).catch(err => console.log(err))
  // }
  
  // render() {
  //   return (
  //     <div>
  //       <h2 className="large text-primary" >Find your perfect career today!</h2>
  //       <Card />
  //     </div>
  //   )
  // }
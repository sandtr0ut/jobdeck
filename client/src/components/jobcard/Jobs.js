import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import Card from './Card';
import { getProfiles } from '../../actions/profile';
import API from '../../../../routes/api/jobCards'

class Jobs extends Component {
  state = {
    BackgroundImg: "",
    likedJobs: 0,
  };

  handleBtnClick = event => {
    console.log(event)
  };

  loadNextJob = () =>{
    API.getRandomJob()
      .then(res => 
        this.setState({
          image:
        }) )
  }




}

const Jobs = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getProfiles]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
          <Fragment>
            <h1 className="large text-primary">Job Search</h1>
            <p className="lead">
              <i className="fab fa-connectdevelop" /> Browse and connect with
              developers
          </p>
            <div className="profiles">
              {profiles.length > 0 ? (
                profiles.map(profile => (
                  <Card key={profile._id} profile={profile} />
                ))
              ) : (
                  <h4>No profiles found...</h4>
                )}
            </div>
          </Fragment>
        )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);

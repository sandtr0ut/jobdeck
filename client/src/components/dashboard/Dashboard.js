// Here we fetch all of our data using an action,
// bring it in from the Redux state, and
// pass it down to other components

import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";
import DashboardAdminActions from "./DashboardAdminActions";
import Experience from "./Experience";
import Education from "./Education";
// import ComProfile from "./Company";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";
// import ComAccounts from './ComAccounts';

// const Dashboard = props => {
const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <Fragment>
          <DashboardActions />
          {/* experience is the prop we pass into Experience.js 
            set equal to the experience part of the profile STATE*/}
          <Experience experience={profile.experience} />

          <Education education={profile.education} />

          {/* <ComProfile company={profile.com} /> */}

          <div className="my-2">
            <button className="btn btn-danger" onClick={() => deleteAccount()}>
              <i className="fas fa-user-minus" /> Delete My Account
            </button>
          </div>

          {/* <ComAccounts /> */}
          <DashboardAdminActions />
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Individual Profile
          </Link>
          {/* Update Route */}
          <Link to="/add-comprofile" className="btn btn-secondary my-1">
            Create Company Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);

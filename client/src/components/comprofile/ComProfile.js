import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileTop from '../profile/ProfileTop';
import ComProfileComprofile from './ComProfileComprofile';
import { getProfileById } from '../../actions/profile';

const ComProfile = ({
  getProfileById,
  profile: { profile, loading },
  auth,
  match
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to="/profiles" className="btn btn-light">
            Back To Profiles
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to="/edit-profile" className="btn btn-dark">
                Edit Profile
              </Link>
            )}
          <div className="profile-grid my-1">
            <ProfileTop profile={profile} />
            <div className="profile-exp bg-white p-2">
              <h2 className="text-primary">Company Details</h2>
              {profile.comprofile.length > 0 ? (
                <Fragment>
                  {profile.comprofile.map(comprofile => (
                    <ComProfileComprofile
                      key={comprofile._id}
                      experience={comprofile}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>No Company Profile</h4>
              )}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

ComProfile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getProfileById }
)(ComProfile);

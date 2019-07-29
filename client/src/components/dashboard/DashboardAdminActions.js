import React from 'react';
import { Link } from 'react-router-dom';

// TODO:  Update Routes
const DashboardAdminActions = () => {
  return (
    <div className="dash-buttons">
      <Link to="/add-comprofile" className="btn btn-light">
        <i className="fas fa-user-circle text-primary" /> Create/Edit Company
        Profile
      </Link>
      <Link to="/profile/profile.user._id" className="btn btn-light">
        <i className="fas fa-user-circle text-primary" /> View Company Profile
      </Link>
      <Link to="/add-experience" className="btn btn-light">
        <i className="fab fa-black-tie text-primary" /> Add JobPost
      </Link>
    </div>
  );
};

export default DashboardAdminActions;

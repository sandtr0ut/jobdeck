import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComProfile } from "../../actions/profile";

const AddComProfile = ({ addComProfile, history }) => {
  const [formData, setFormData] = useState({
    companyname: "",
    website: "",
    location: "",
    // tagline: "",
    // industries: "",
    description: ""
  });

  const {
    companyname,
    website,
    location,
    // tagline,
    // industries,
    description
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className="large text-primary">Add a Company Profile</h1>
      <p className="lead">
        <i className="fas fa-code-branch" />
        Add your companies details
      </p>
      <small>* = field</small>
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          addComProfile(formData, history);
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="* Company Name"
            name="companyname"
            value={companyname}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Website i.e placeholder.com"
            name="website"
            value={website}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={e => onChange(e)}
          />
        </div>

        {/* <div className="form-group">
          <input
            type="text"
            placeholder="Tagline"
            name="Tagline"
            value={tagline}
            onChange={e => onChange(e)}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Industry"
            name="Tagline"
            value={industries}
            onChange={e => onChange(e)}
          />
        </div> */}

        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
            value={description}
            onChange={e => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddComProfile.propTypes = {
  addComProfile: PropTypes.func.isRequired
};

export default connect(
  null,
  { addComProfile }
)(withRouter(AddComProfile));

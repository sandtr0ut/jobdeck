import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addJobPost } from '../../actions/profile';

const AddJobPost = ({ addJobPost, history }) => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    companyName: '',
    workLocation: '',
    jobDescription: '',
    jobType: '',
    desiredExperience: '',
    salary: '',
    keySkills: '',
    posted: ''
  });

  const {
    jobTitle,
    companyName,
    workLocation,
    jobDescription,
    jobType,
    desiredExperience,
    salary,
    keySkills,
    posted
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className="large text-primary">Add A Job Post</h1>
      <p className="lead">
        <i className="fas fa-code-branch" /> Add Job Post details
      </p>
      <small>* = required field</small>
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          addJobPost(formData, history);
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="* Job Title"
            name="jobTitle"
            value={jobTitle}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Company Name"
            name="companyName"
            value={companyName}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Work Location"
            name="workLocation"
            value={workLocation}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            type="text"
            placeholder="Job Description"
            name="jobDescription"
            cols="30"
            rows="5"
            value={jobDescription}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Job Type"
            name="jobType"
            value={jobType}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Desired Experience"
            name="desiredExperience"
            value={desiredExperience}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Salary/Salary-Range"
            name="salary"
            value={salary}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Key Skills"
            name="keySkills"
            value={keySkills}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            name="posted"
            value={posted}
            onChange={e => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" href="dashboard.html">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddJobPost.propTypes = {
  addJobPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addJobPost }
)(withRouter(AddJobPost));

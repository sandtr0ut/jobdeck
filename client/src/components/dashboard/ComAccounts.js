import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getComProfileById } from '../../actions/comprofile';
// import { deleteExperience } from '../../actions/profile';

const ComAccounts = ({
  getComProfileById,
  comprofile: { comprofile, loading }
}) => {
  useEffect(() => {
    getComProfileById();
  }, [getComProfileById]);

  // Adding unique key prop to each child/item in list
  const comprofiles = comprofile.map(comp => (
    <tr key={comp.id}>
      <td>{comp.companyname}</td>
      <td className="hide-sm">{comp.location}</td>
      <td>
        <Moment format="YYYY/MM/DD">{comp.date}</Moment> -{' '}
      </td>
      <td>
        Create Job-Post
        {/* add 'create job-post button' */}
        {/* <button
          onClick={() => deleteExperience(exp._id)}
          className="btn btn-danger"
        >
          Delete
        </button> */}
      </td>
    </tr>
  ));

  return (
    <Fragment>
      {comprofile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h2 className="my-2">Your Business Account(s)</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Company</th>
                <th className="hide-sm">Location</th>
                <th className="hide-sm">Created</th>
                <th />
              </tr>
            </thead>
            <tbody>{comprofiles}</tbody>
          </table>
        </Fragment>
      )}
    </Fragment>
  );
};

ComAccounts.propTypes = {
  getComProfileById: PropTypes.func.isRequired,
  comprofile: PropTypes.array.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  comprofile: state.comprofile
});

export default connect(
  mapStateToProps,
  { getComProfileById }
)(ComAccounts);

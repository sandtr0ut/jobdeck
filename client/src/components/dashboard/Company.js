import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteComprofile } from '../../actions/profile';

const Company = ({ com, deleteComprofile }) => {
  const coms = com.map(comp => (
    <tr key={comp.id}>
      <td>{comp.companyname}</td>
      <td className="hide-sm">{comp.website}</td>
      <td>{comp.location}</td>

      <td>
        <button
          onClick={() => deleteComprofile(comp._id)}
          className="btn-isSmall btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="mt-2 mb"> Business Profile(s)</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Website</th>
            <th>Location</th>
            <th />
          </tr>
        </thead>
        <tbody>{coms}</tbody>
      </table>
    </Fragment>
  );
};

Company.propTypes = {
  com: PropTypes.array.isRequired,
  deleteComprofile: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteComprofile }
)(Company);

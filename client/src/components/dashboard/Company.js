import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComProfile } from "../../actions/profile";

const ComProfile = ({ com, addComProfile }) => {
  const coms = com.map(com => (
    <tr key={com.id}>
      <td>{com.company}</td>
      <td className="hide-sm">{com.title}</td>
      <td />

      <td>
        <button
          onClick={() => addComProfile(com._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-2">Company</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Location</th>
            <th />
          </tr>
        </thead>
        <tbody>{coms}</tbody>
      </table>
    </Fragment>
  );
};

ComProfile.propTypes = {
  com: PropTypes.array.isRequired,
  addComProfile: PropTypes.func.isRequired
};

export default connect(
  null,
  { addComProfile }
)(ComProfile);

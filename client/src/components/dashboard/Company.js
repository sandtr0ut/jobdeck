import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteCom } from "../../actions/profile";

const Company = ({ com, deleteCom }) => {
  const coms = com.map(comp => (
    <tr key={comp.id}>
      <td>{comp.company}</td>
      <td className="hide-sm">{comp.title}</td>
      <td />

      <td>
        <button onClick={() => deleteCom(comp._id)} className="btn btn-danger">
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

Company.propTypes = {
  com: PropTypes.array.isRequired,
  deleteCom: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteCom }
)(Company);

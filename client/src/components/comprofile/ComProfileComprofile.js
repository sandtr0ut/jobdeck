import React from 'react';
import PropTypes from 'prop-types';

const ComProfileComprofile = ({
  comprofile: {
    companyname,
    website,
    location,
    tagline,
    industries,
    description
  }
}) => (
  <div>
    <h3 className="text-dark">{companyname}</h3>
    <p>
      <strong>Position: </strong> {website}
    </p>
    <p>
      <strong>Location: </strong> {location}
    </p>
    <p>
      <strong>Description: </strong> {tagline}
    </p>
    <p>
      <strong>Description: </strong> {industries}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </div>
);

ComProfileComprofile.propTypes = {
  comprofile: PropTypes.object.isRequired
};

export default ComProfileComprofile;

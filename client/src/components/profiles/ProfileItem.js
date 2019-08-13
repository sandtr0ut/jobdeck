import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
    experience
  }
}) => {
  return (
    <div className="profile bg-light">
      {/* {avatar} - pulled-out from profile.user in ProfileItem above */}
      <img src={avatar} alt="" className="round-img" />
      <div>
        {/* {name} & - pulled-out from profile.user in ProfileItem above */}
        <h2>{name}</h2>
        <p>
          {status} {company && <span> at {company}</span>}
        </p>
        <p className="my-1">{location && <span>{location}</span>}</p>
        <Link to={`/profile/${_id}`} className="btn btn-primary">
          View Profile
        </Link>
      </div>

      <ul>
        {/* need to use index as a key for .map() since skills is just and array of words */}
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className="text-light">
            <i className="fas fa-check" /> {skill}
          </li>
        ))}
      </ul>
      <ul>
        {/* need to use index as a key for .map() since skills is just and array of words */}
        {experience.map(exp => (
          <li key={exp.id} className="text-light">
            {exp.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
  experience: PropTypes.array.isRequired
};

export default ProfileItem;

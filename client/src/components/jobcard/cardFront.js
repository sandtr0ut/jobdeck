import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';


// const cardFront = ({
//     jobTitle,
//     company,
//     salary,
//     date,
// }) => (
//     return(
//     <div className="container">
//         <div className="post bg-white p-1 my-1">
//             <h2 className="my-1">{jobTitle}</h2>
//         </div>
//     </div>)
// )

function CardFront(props) {
    return (
    <div className="card bg-white"
    >
    <h1>Job Title</h1>
    <h2>Company</h2>
    <h2>Salary</h2>
    <h3>Date</h3>

    </div>
    )
  }

export default CardFront;
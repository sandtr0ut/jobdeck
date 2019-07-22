import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';



function CardBack(props) {
    return (
    <div className="card bg-dark custom-scrollbar"
    >
    <h1>Job Description</h1>
    <p>Here's a description and stuff with some bullshit, go fuck yoself. Say Hi to your mother for me. </p>

    </div>
    )
  }

export default CardBack;
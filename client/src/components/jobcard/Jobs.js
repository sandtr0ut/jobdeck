import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from './Card'


const Jobsearch = ({
    // cardContents: {
    //     jobTitle:,
    //     company: { name, logo },
    //     location,
    //     salary,
    //     summary
    // }
}) => {
    return (
        <div>
          <h2 className="large text-primary" >Find your perfect career today!</h2>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>

        )
}


export default Jobsearch;


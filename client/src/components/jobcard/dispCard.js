import React, {
    Fragment,
    useEffect
} from 'react';
import {
    Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    connect
} from 'react-redux';
import Spinner from '../layout/Spinner';
import ReactDOM from 'react-dom';
import CardFront from './cardFront'
import CardBack from './cardBack'
// '../../actions/profile';



function handleclick(){
    // if (clicked === true) {
    //     this.setState = 
    // }
}

let clicked = true;

function dispCard(props) {


    if (props.clicked !== true) {
        return <CardFront onClick={this.handleclick}/> ;
    }
    return <CardBack /> ;
}

export default dispCard;
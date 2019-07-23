import React, {
    Fragment,
    useEffect, Component
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


class DispJobCard extends Component{
    constructor(props){
        super(props);

        this.state={
            summary: false
        }
    
    }
  
  render() {

    return(
    <div>
       <CardFront 
        
       />
       <CardBack

       />
    </div>
    )
} 
}


export default DispJobCard;
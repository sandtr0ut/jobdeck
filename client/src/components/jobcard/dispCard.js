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


// class CardDisplay extends Component{
//     constructor(props){
//         super(props);

//         this.state={
//             card: front
//         }
//     }

//     toggleSide = () =>{
//         this.setState(state => ({card: back}))
//     }
// }


// const dispCard = ({


// })

// function handleclick() {
//     // if (clicked === true) {
//     //     this.setState = 
//     // }
// }

// let clicked = true;

// function dispCard(props) {

//     // return <h1>Hello, {props}</h1>
//     if (clicked !== true) {
//         return <CardFront / > ;
//         // return <CardFront onClick={this.handleclick}/> ;
//     }
//     return <CardBack / > ;
// }

export default dispCard;
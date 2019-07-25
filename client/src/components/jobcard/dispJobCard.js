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
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// '../../actions/profile';


class DispJobCard extends Component {
    constructor(props){
        super(props);

        this.state={
            summary: false,

        }

    }

    handleShowCardBody = () => {
        this.setState({
            bodyVisible: !this.state.bodyVisible
        })
    }

    render() {

        return (
            // <div className="card-body" bodyVisible={false}>
            // <CardFront>
            // <CardBack />
            // </CardFront>
            // </div>
            <div className="whole-card">
                <div onClick={this.handleShowCardBody}>{this.props.title}</div>
                <div className="card-body" bodyVisible={this.state.bodyVisible}>
                    {this.state.bodyVisible ? this.props.children : null}
                </div>
            </div>
            // <DispJobCard title="This is a title" bodyVisible={false}>
            //     <p>Everything here is going to appear below the card title.</p>
            // </DispJobCard>
        )
    }
}


export default DispJobCard;
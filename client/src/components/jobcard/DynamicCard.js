import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CardBtn from './CardButton';
import BackgroundImg from './demo-resources/imgs/nastuhabootalebiyWwob8kwOCkunsplash.jpg'
import LogoImg from './demo-resources/imgs/logo.png'


const Card = props =>
    
        <div className="container" >
            <Card>

            
                        <div>
                        
                            <CardBtn
                                style={{ opacity: props.image ? 1 : 0 }}
                                onClick={props.handleBtnClick}
                                data-value="pass"
                            />
                            <CardBtn
                                style={{ opacity: props.image ? 1 : 0 }}
                                onClick={props.handleBtnClick}
                                data-value="pick"
                            />

                            <input id="toggle" className="toggle btn-primary" type="checkbox" />
                            <label htmlFor="toggle" className="btn btn-primary">
                                <i className="fas fa-arrow-circle-down fa-4x" />
                            </label>

                            {/* <input id="toggleheart" className="toggle toggleheart btn-primary" type="checkbox" />
                        <label htmlFor="toggleheart" className="btn heartbtn btn-primary">
                            <i className="far fa-heart fa-4x"></i>
                        </label>
                        <input id="toggleX" className="toggle toggleX btn-primary" type="checkbox" />
                        <label htmlFor="toggleX" className="btn Xbtn btn-primary">
                            <i className="fas fa-times-circle fa-4x"></i>
                        </label> */}

</div>
</Card>
                            
</div>



export default Card;
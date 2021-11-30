import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

import { TweenMax, Power3 } from 'gsap';

const Fader = ({ type, delay, text, y = 0 }) => {
    let textItems = useRef(null);

    useEffect(() => {
        TweenMax.to(
            textItems,
            2,
            {
                y,
                ease: Power3.easeOut,
                delay,
                opacity: 1,
            }
        )
    }, []);
     
    return (
        <>
            <h1 className={type+"Text"} ref={el => {textItems = el}}>{text}</h1>
        </>
    )
}

Fader.defaultProps = {
    text: 'Hello World!'
}
Fader.propTypes = {
    text: PropTypes.string,
}

export default Fader;
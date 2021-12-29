import React, { useEffect, useRef } from 'react';
import './Fades.css';

import { TweenMax, Power3 } from 'gsap';

const FadeText = ({ type, delay, text, y = 0 }) => {
    let textItems = useRef(null);

    useEffect(() => {
        TweenMax.to(
            textItems,
            {
                scrollTrigger: {
                    trigger: '.'+textItems.className,
                    toggleActions: 'restart reset restart reset',
                },
                y,
                ease: Power3.easeOut,
                delay,
                opacity: 1,
            }
        );
    }, []);
     
    return (
        <>
            <h1 className={type+"Text"} ref={el => {textItems = el}}>{text}</h1>
        </>
    )
}

export default FadeText;
import React, { useEffect, useRef } from 'react';
import './Fades.css';

import { TweenMax, Power3 } from 'gsap';

const FadeDiv = ({ delay, children, y = 0, className }) => {
    let divItems = useRef(null);

    useEffect(() => {
        TweenMax.to(
            divItems,
            {
                scrollTrigger: {
                    trigger: `.${className}`,
                    toggleActions: 'restart reset restart reset',
                },
                y,
                ease: Power3.easeOut,
                delay,
                opacity: 1,
            }
        );
    }, [delay, y]);

    return (
        <>
            <div 
                className={className} 
                ref={el => {divItems = el}}>
                {children}
            </div>
        </>
    )
}

export default FadeDiv;
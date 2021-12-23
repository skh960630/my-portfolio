import React, { useEffect, useRef } from 'react';

import { TweenMax, Power3 } from 'gsap';

const FadeDiv = ({ delay, children, y = 0 }) => {
    let divItems = useRef(null);

    useEffect(() => {
        TweenMax.to(
            divItems,
            2,
            {
                scrollTrigger: {
                    trigger: "divItem",
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
            <div 
                className="divItem" 
                ref={el => {divItems = el}}>
                {children}
            </div>
        </>
    )
}

export default FadeDiv;
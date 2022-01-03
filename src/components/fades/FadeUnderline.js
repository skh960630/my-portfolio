import React, { useEffect, useRef } from 'react';
import './Fades.css';

import { TweenMax, Power3 } from 'gsap';

const FadeUnderline = ({ type, delay, y = 0, children, length = 100 }) => {
    let underlineItem = useRef(null);

    useEffect(() => {
        TweenMax.to(
            underlineItem,
            {
                scrollTrigger: {
                    trigger: '.'+underlineItem.className,
                    toggleActions: 'restart reset restart reset',
                },
                y,
                ease: Power3.easeOut,
                delay,
                opacity: 1,
                backgroundImage: 'linear-gradient(transparent 80%, #ffce0a 20%)',
                backgroundSize: `${length}% 100%`,
                duration: 0.6,
            }
        );
    }, []);

    return (
        <div 
            className={type+"Underline"}
            ref={el => {underlineItem = el}}>
            {children}
        </div>
    );
}

export default FadeUnderline;
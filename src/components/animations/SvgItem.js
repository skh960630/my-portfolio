import React, { useRef, useEffect } from 'react';
import BookImage from './BookImage';

import { TweenMax, Power3 } from 'gsap';

const SvgItem = ({ delay, y }) => {
    let svgImage = useRef(null);

    useEffect(() => {
        TweenMax.to(
            svgImage,
            2,
            {
                scrollTrigger: {
                    trigger: svgImage.current,
                    toggleActions: 'restart reverse restart reverse',
                },
                y,
                ease: Power3.easeOut,
                delay,
                opacity: 1,
            }
        );
    }, []);

    return (
        <div className='image-container' ref={el => svgImage=el}>
            <BookImage />
        </div>
    );
}

export default SvgItem;
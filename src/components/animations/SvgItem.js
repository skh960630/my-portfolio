import React, { useRef, useEffect } from 'react';
import BookImage from './BookImage';

import { TweenMax, Power3 } from 'gsap';
import './Svg.css';

const SvgItem = ({ delay, y }) => {
    let svgImage = useRef(null);

    useEffect(() => {
        TweenMax.to(
            svgImage,
            2,
            {
                scrollTrigger: {
                    trigger: '.'+svgImage.className,
                    toggleActions: 'restart reset restart reset',
                },
                y,
                ease: 'elastic.out',
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
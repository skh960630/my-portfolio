import React, { useRef, useEffect } from 'react';
import BookImage from './BookImage';

import { TweenMax } from 'gsap';
import './Svg.css';

const SvgItem = ({ delay, y }) => {
    let svgImage = useRef(null);

    useEffect(() => {
        function runSVG () {
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
        }
        runSVG();
    }, []);

    return (
        <div className='image-container' ref={el => svgImage=el}>
            <BookImage />
        </div>
    );
}

export default SvgItem;
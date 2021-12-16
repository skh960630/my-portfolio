import React from 'react';
import FadeText from '../fades/FadeText';
import SvgItem from '../animations/SvgItem';

import './Sections.css';

const IntroductionPage = (props) => {
    return (
        <div className='intro-container'>
            <div style={{ display: 'block' }}>
                <FadeText text="Hello," type="Head" delay={0.3} />
                <FadeText text="Welcome to" type="Body" delay={0.8} />
                <FadeText text="Kane's" type="Body" delay={1.2} />
                <FadeText text="Portfolio" type="Body" delay={1.8} />
            </div>
            <SvgItem y='-10vh' delay={2.4} />
        </div>
    );
} 

export default IntroductionPage;
import React from 'react';
import Fader from '../animations/Fader';
import SvgItem from '../animations/SvgItem';
import '../../App.css';

const IntroductionPage = (props) => {
    return (
        <div className='intro-container'>
            <div style={{ display: 'block' }}>
                <Fader text="Hello," type="Head" delay={0.3} />
                <Fader text="Welcome to" type="Body" delay={0.8} />
                <Fader text="Kane's" type="Body" delay={1.2} />
                <Fader text="Portfolio" type="Body" delay={1.8} />
            </div>
            <SvgItem y='-10vh' delay={2.4} />
        </div>
    );
} 

export default IntroductionPage;
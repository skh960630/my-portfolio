import React from 'react';
import Fader from '../Fader';
import '../../App.css';

const IntroductionPage = (props) => {
    return (
        <div className='intro-container'>
            <div style={{ display: 'block' }}>
                <Fader text="Hi," type="Head" delay={0.3} />
                <Fader text="Welcome to" type="Head" delay={1} />
                <Fader text="Kane's" type="Head" delay={1.5} />
                <div style={{ marginTop: '6vh' }}>
                    <Fader text="Portfolio" type="Head" y='-3vh' delay={2} />
                </div>
            </div>
        </div>
    );
} 

export default IntroductionPage;
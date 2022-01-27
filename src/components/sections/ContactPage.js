import React, { useState, useEffect } from 'react';

import FrontCard from '../card/FrontCard';
import BackCard from '../card/BackCard';

import FadeText from '../fades/FadeText';
import FadeUnderline from '../fades/FadeUnderline';
import FadeDiv from '../fades/FadeDiv';

import FlipIcon from '@mui/icons-material/FlipCameraAndroid';

import Tilt from 'react-parallax-tilt';

import './Sections.css';

const ContactPage = () => { 
    const [cardFlip, setCardFlip] = useState(false);
    const [showFront, setShowFront] = useState(true);

    useEffect(() => {
        setCardFlip(false);
    }, [cardFlip]);

    return (
        <div style={{ width: '90vw' }}>
            <div className='title'>
                <FadeUnderline type="Contact" delay={1.5} length={15}>
                    <FadeText text="Contact" type="ContactSubhead" delay={0.8} />
                </FadeUnderline>
            </div>
            <FadeDiv delay={2.1} y='-2vh' className='divContact'>
                <Tilt>
                    <div className={`namecard-container ${cardFlip ? 'flip' : ''}`}>
                    {showFront ? (
                            <FrontCard />
                        ) : (
                            <BackCard />
                        )
                    }
                    </div>
                </Tilt>
            </FadeDiv>
            <FadeDiv delay={2.3} y='-2vh' className='divFlipBt'>
                <div className='flip-icon'>
                    <FlipIcon 
                        fontSize='large' 
                        onClick={() => {
                            setShowFront(!showFront);
                            setCardFlip(true);
                        }}
                    />
                </div>
            </FadeDiv>
        </div>
    );
}

export default ContactPage;
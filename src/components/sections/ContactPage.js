import React, { useState, useCallback } from 'react';

import FrontCard from '../card/FrontCard';
import BackCard from '../card/BackCard';
import ColorPicker from'../colorPicker/ColorPicker';

import FadeText from '../fades/FadeText';
import FadeUnderline from '../fades/FadeUnderline';
import FadeDiv from '../fades/FadeDiv';

import FlipIcon from '@mui/icons-material/FlipCameraAndroid';

import Tilt from 'react-parallax-tilt';

import './Sections.css';

const ContactPage = () => { 
    const [cardFlip, setCardFlip] = useState(false);
    const [showFront, setShowFront] = useState(true);
    const [colorPick, setColorPick] = useState(1);

    const flipBt = useCallback(() => {
        setCardFlip(!cardFlip);
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
                        className='flip-bt-hover'
                        fontSize='large'
                        onClick={() => {
                            setShowFront(!showFront);
                            flipBt();
                        }}
                    />
                </div>
            </FadeDiv>
            <FadeDiv delay={2.5} y='-1vh' className='divColorContainer'>
                <ColorPicker colorPick={colorPick} setColorPick={setColorPick} />
            </FadeDiv>
        </div>
    );
}

export default ContactPage;
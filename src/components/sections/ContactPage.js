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

const ContactPage = ({ setManualcolor }) => { 
    const [cardFlip, setCardFlip] = useState(false);
    const [colorPick, setColorPick] = useState(1);
    const [colorList, setColorList] = useState({ color1: 'lightsalmon', color2: '#ffce0a', color3: '#353839' });

    const flipBt = useCallback(() => {
        setCardFlip(!cardFlip);
    }, [cardFlip]);

    const changeColor = (pick) => {
        setColorPick(pick);

        switch (pick) {
            case 1:
                setColorList({ color1: 'lightsalmon', color2: '#ffce0a', color3: '#353839' });
                setManualcolor({ background: 'lightsalmon', scroll: '#ffce0a' });
                break;
            case 2:
                setColorList({ color1: '#655d8a', color2: '#fdceb9', color3: '#7897ab' })
                setManualcolor({ background: '#655d8a', scroll: '#fdceb9' });
                break;
            case 3:
                setColorList({ color1: '#353839', color2: '#F0E68C', color3: '#ff6600' });
                setManualcolor({ background: '#353839', scroll: '#F0E68C' });
                break;
        }
    }

    return (
        <div style={{ width: '90vw' }}>
            <div className='title'>
                <FadeUnderline type="Contact" color={colorList.color2} delay={1.5} length={15}>
                    <FadeText text="Contact" type="ContactSubhead" delay={0.8} />
                </FadeUnderline>
            </div>
            <FadeDiv delay={2.1} y='-2vh' className='divContact'>
                <Tilt>
                    <div className={`namecard-container ${cardFlip ? 'flip' : ''}`}>
                        <FrontCard colorList={colorList} />
                        <BackCard colorList={colorList} />
                    </div>
                </Tilt>
            </FadeDiv>
            <FadeDiv delay={2.3} y='-2vh' className='divFlipBt'>
                <div className='flip-icon'>
                    <FlipIcon
                        className='flip-bt-hover'
                        fontSize='large'
                        onClick={() => { flipBt() }}
                    />
                </div>
            </FadeDiv>
            <FadeDiv delay={2.5} y='-1vh' className='divColorContainer'>
                <ColorPicker colorPick={colorPick} setColorPick={changeColor} />
            </FadeDiv>
        </div>
    );
}

export default ContactPage;
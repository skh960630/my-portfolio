import React, { useState, useCallback, useEffect } from 'react';

import FrontCard from '../card/FrontCard';
import BackCard from '../card/BackCard';
import ColorPicker from'../colorPicker/ColorPicker';

import FadeText from '../fades/FadeText';
import FadeUnderline from '../fades/FadeUnderline';
import FadeDiv from '../fades/FadeDiv';

import FlipIcon from '@mui/icons-material/FlipCameraAndroid';

import Tilt from 'react-parallax-tilt';

import './Sections.css';

const ContactPage = ({ setContactColor }) => { 
    const [cardFlip, setCardFlip] = useState(false);
    const [colorPick, setColorPick] = useState(1);
    const [colorList, setColorList] = useState({ color1: 'lightsalmon', color2: '#ffce0a', color3: '#353839' });

    useEffect(() => {
        setContactColor(colorList.color1);
    }, [colorPick]);

    const flipBt = useCallback(() => {
        setCardFlip(!cardFlip);
    }, [cardFlip]);

    const changeColor = (pick) => {
        setColorPick(pick);
        pick === 1 ? setColorList({ color1: 'lightsalmon', color2: '#ffce0a', color3: '#353839' })
        : pick === 2 ? setColorList({ color1: 'lightsalmon', color2: '#ffce0a', color3: '#353839' })
        : setColorList({ color1: 'lightsalmon', color2: '#ffce0a', color3: '#353839' });
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
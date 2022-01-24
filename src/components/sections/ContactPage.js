import React, { useState, useEffect } from 'react';

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
                {/* <div className={`namecard-container ${cardFlip ? 'flip' : ''}`}> */}
                {
                    showFront ? (
                        <div className={`namecard-container ${cardFlip ? 'flip' : ''}`}>
                            <div className='vertical-line-front'>
                            </div>
                            <div style={{ paddingTop: '5%' }}>
                                <div style={{ marginLeft: '10%', paddingTop: '5%', paddingBottom: '5%', 
                                            fontSize: '40px', fontWeight: 'bold',  fontFamily: 'Arial' }}>
                                    Frontend Developer
                                </div>
                                <div className='horizontal-line'>
                                </div>
                            </div>
                            <div style={{ textAlign: 'right', paddingRight: '4%', paddingTop: '29%', fontSize: '30px', 
                                        fontWeight: 'bold',  fontStyle: 'oblique',  fontFamily: 'Arial' }}>
                                Kane Shin
                            </div>
                        </div>
                    ) : (
                        <div className={`namecard-container ${cardFlip ? 'flip' : ''}`}>
                            <div className='vertical-line-back'>
                            </div>
                            <div style={{ width: '50%', paddingTop: '25%',  display: 'inline-block',
                                        fontFamily: 'Arial', textAlign: 'center' }}>
                                <div style={{ fontSize: '38px', fontWeight: 'bold' }}>
                                    Kane Shin
                                </div>
                                <div style={{ fontSize: '23px' }}>
                                    MQ Univ.
                                </div>
                            </div>
                            <div style={{ width: '50%', paddingTop: '25%', display: 'inline-block', textAlign: 'center' }}>
                                <div style={{ paddingTop: '0.5%', fontSize: '20px' }}>
                                    skh960630@gmail.com
                                </div>
                                <div style={{ paddingTop: '0.5%', fontSize: '20px' }}>
                                    (+61) 0434 686 570
                                </div>
                            </div>
                        </div>
                    )
                }
                {/* </div> */}
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
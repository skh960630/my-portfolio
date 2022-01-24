import React, { useState } from 'react';

import FadeText from '../fades/FadeText';
import FadeUnderline from '../fades/FadeUnderline';
import FadeDiv from '../fades/FadeDiv';
import FlipIcon from '@mui/icons-material/FlipCameraAndroid';

import './Sections.css';

const ContactPage = () => { 
    const [cardFlip, setCardFlip] = useState(false);

    return (
        <div style={{ width: '90vw' }}>
            <div className='title'>
                <FadeUnderline type="Contact" delay={1.5} length={15}>
                    <FadeText text="Contact" type="ContactSubhead" delay={0.8} />
                </FadeUnderline>
            </div>
            <FadeDiv delay={2.1} y='-2vh' className='divContact'>
                {
                    cardFlip ? (
                        <div className='namecard-container'>
                            <div className='vertical-line-back'>
                            </div>
                            <div style={{ width: '50%', paddingTop: '25%', fontSize: '38px', display: 'inline-block',
                                        fontWeight: 'bold', fontFamily: 'Arial', textAlign: 'center' }}>
                                Kane Shin
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
                    ) : (
                        <div className='namecard-container'>
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
                    )
                }
            </FadeDiv>
            <FadeDiv delay={2.3} y='-2vh' className='divFlipBt'>
                <div className='flip-icon'>
                    <FlipIcon 
                        fontSize='large' 
                        onClick={() => setCardFlip(!cardFlip)}
                    />
                </div>
            </FadeDiv>
        </div>
    );
}

export default ContactPage;
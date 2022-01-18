import React, { useEffect, useState } from 'react';

import FadeText from '../fades/FadeText';
import FadeUnderline from '../fades/FadeUnderline';
import FadeDiv from '../fades/FadeDiv';

import './Sections.css';

const ContactPage = () => { 

    return (
        <div style={{ width: '90vw' }}>
            <div className='title'>
                <FadeUnderline type="Contact" delay={1.5} length={15}>
                    <FadeText text="Contact" type="ContactSubhead" delay={0.8} />
                </FadeUnderline>
            </div>
            <div className='namecard-container'>
                <div className='vertical-line'>
                </div>
                <div style={{ paddingTop: '5%' }}>
                    <div style={{ marginLeft: '10%', paddingTop: '5%', paddingBottom: '5%', fontSize: '40px', fontWeight: 'bold',  fontFamily: 'Arial' }}>
                        Frontend Developer
                    </div>
                    <div className='horizontal-line'>
                    </div>
                </div>
                <div style={{ textAlign: 'right', paddingRight: '6%', paddingTop: '22%', fontSize: '30px', fontWeight: 'bold',  fontStyle: 'oblique',  fontFamily: 'Arial' }}>
                    Kane Shin
                </div>
                <div style={{ textAlign: 'right', paddingRight: '2%', paddingTop: '0.5%', fontSize: '20px' }}>
                    skh960630@gmail.com
                </div>
                <div style={{ textAlign: 'right', paddingRight: '3.5%', paddingTop: '0.5%', fontSize: '20px' }}>
                    (+61) 0434 686 570
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
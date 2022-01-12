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
            </div>
        </div>
    );
}

export default ContactPage;
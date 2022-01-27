import React from 'react';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './Card.css';

const BackCard = () => { 
    return (
        <div className='backcard'>
            <div className='vertical-line-back'>
            </div>
            <div className='backcard-container' style={{ float: 'left', fontFamily: 'Arial' }}>
                <div className='backcard-box'>
                    <div style={{ fontSize: '38px', fontWeight: 'bold' }}>
                        Kane Shin
                    </div>
                    <div style={{ fontSize: '23px' }}>
                        MQ Univ.
                    </div>
                </div>
            </div>
            <div className='backcard-container' style={{ float: 'right' }}>
                <div className='backcard-box'>
                    <div className='contact-row'>
                        <EmailIcon fontSize='large' />
                        <div className='contact-info'>
                            <div className='contact-link'>
                                skh960630@gmail.com
                            </div>
                        </div>
                    </div>
                    <div className='contact-row'>
                        <LinkedInIcon fontSize='large' />
                        <div className='contact-info'>
                            <a href="https://www.linkedin.com/in/kane-shin-200a84139/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <div className='contact-link'>
                                    LinkedIn
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='contact-row'>
                        <GitHubIcon fontSize='large' />
                        <div className='contact-info'>
                            <a href="https://github.com/skh960630"
                                target="_blank"
                                rel="noopener noreferrer">
                                <div className='contact-link'>
                                    Github
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BackCard;
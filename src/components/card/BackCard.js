import React from 'react';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import styled from 'styled-components';
import './Card.css';

const BackCard = ({ colorList }) => { 
    const HoverText = styled.p`
        font-size: 20px;
        color: white;
        :hover {
            cursor: pointer;
            color: ${colorList.color2};
        }
    `;

    return (
        <div className='backcard' style={{ backgroundColor: colorList.color3 }}>
            <div className='vertical-line-back'  style={{ borderLeft: `7px solid ${colorList.color2}`}}>
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
                            <HoverText>
                                skh960630@gmail.com
                            </HoverText>
                        </div>
                    </div>
                    <div className='contact-row'>
                        <LinkedInIcon fontSize='large' />
                        <div className='contact-info'>
                            <a href="https://www.linkedin.com/in/kane-shin-200a84139/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <HoverText>
                                    LinkedIn
                                </HoverText>
                            </a>
                        </div>
                    </div>
                    <div className='contact-row'>
                        <GitHubIcon fontSize='large' />
                        <div className='contact-info'>
                            <a href="https://github.com/skh960630"
                                target="_blank"
                                rel="noopener noreferrer">
                                <HoverText>
                                    Github
                                </HoverText>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BackCard;
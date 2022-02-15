import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

import styled from 'styled-components';
import './Card.css';

const ExperienceCard = ({ title, line1, line2, line3, gitURL, color }) => {
    const HoverText = styled.p`
        font-size: 1vw;
        color: rgb(80, 80, 80);
        :hover {
            cursor: pointer;
            color: ${color};
        }
    `;

    return (
        <div className='Experience-Card' style={{ borderColor: color }}>
            <div style={{ padding: '2%' }}>
                <div style={{ fontSize: '1.1vw', fontWeight: 'bold', color }}>
                    {title}
                </div>
                <div style={{ fontSize: '1vw', marginTop: '4%' }}>
                    {line1}
                </div>
                <div style={{ fontSize: '1vw', marginTop: '1%' }}>
                    {line2}
                </div>
                <div style={{ fontSize: '1vw', marginTop: '1%' }}>
                    {line3}
                </div>
                {gitURL &&
                    <div>
                        <GitHubIcon fontSize='medium' />
                        <div className='contact-info'>
                            <a href={gitURL}
                                target="_blank"
                                rel="noopener noreferrer">
                                <HoverText>
                                    Github
                                </HoverText>
                            </a>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default ExperienceCard;
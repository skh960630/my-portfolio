import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import SkillCircle from './SkillCircle';

import styled from 'styled-components';
import './Card.css';

const ExperienceCard = ({ title, line1, line2, line3, gitURL, color, skills, date }) => {
    const HoverText = styled.p`
        font-size: 1vw;
        color: rgb(80, 80, 80);
        :hover {
            cursor: pointer;
            color: ${color};
        }
    `;

    return (
        <fieldset className='Experience-Card' style={{ borderColor: color }}>
            <legend>
                <div className='date' style={{ color }}>
                    {date}
                </div>
            </legend>
            <div style={{ padding: '2%' }}>
                <div style={{ fontSize: '1.1vw', fontWeight: 'bold', color }}>
                    {title}
                </div>
                {skills &&
                    skills.map((s) => 
                        <div style={{ display: 'inline-block', marginRight: '1%', marginTop: '3%' }}>
                            <SkillCircle
                                color={color}
                                text={s[0]}
                                width={s[1]}
                            />
                        </div>
                    )
                }
                <div style={{ fontSize: '1vw', marginTop: '4%', color }}>
                    {line1}
                </div>
                <div style={{ fontSize: '1vw', marginTop: '1%', color }}>
                    {line2}
                </div>
                <div style={{ fontSize: '1vw', marginTop: '1%', color }}>
                    {line3}
                </div>
                {gitURL &&
                    <div className='GitIcon'>
                        <GitHubIcon fontSize='medium' />
                        <div className='git-info'>
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
        </fieldset>
    )
}

export default ExperienceCard;
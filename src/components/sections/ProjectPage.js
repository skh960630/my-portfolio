import React, { useEffect, useState } from 'react';

import ExperienceCard from '../cards/ExperienceCard';
import FadeText from '../fades/FadeText';
import FadeDiv from '../fades/FadeDiv';

import './Sections.css';

const ProjectPage = (props) => { 

    return (
        <div style={{ width: '80vw' }}>
            <div className='title dark-text'>
                <FadeText text="Experience" type="Subhead" delay={1} />
            </div>
            <FadeDiv delay={2.5}>
                <div style={{ display: 'flex', justifyContent:'center' }}>
                    <ExperienceCard />
                    <ExperienceCard />
                    <ExperienceCard />
                </div>
            </FadeDiv>
            <FadeDiv delay={3.5}>
                <div style={{ display: 'flex', justifyContent:'center' }}>
                    <ExperienceCard />
                    <ExperienceCard />
                    <ExperienceCard />
                </div>
            </FadeDiv>
        </div>
    );
}

export default ProjectPage;
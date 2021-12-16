import React, { useEffect, useState } from 'react';

import ExperienceCard from '../cards/experienceCard';
import FadeText from '../fades/FadeText';
import FadeDiv from '../fades/FadeDiv';

import './Sections.css';

const ProjectPage = (props) => { 

    return (
        <FadeDiv delay={1} style={{ width: '100vw', height: '100vh' }}>
            <div className='title dark-text'>
                <FadeText text="Experience" type="Subhead" delay={1} />
            </div>
            <ExperienceCard />
        </FadeDiv>
    );
}

export default ProjectPage;
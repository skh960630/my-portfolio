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
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <ExperienceCard 
                        title="Work experience in random company"
                        line1="Work experience in random company"
                        line2="Work experience in random company"
                        line3="Work experience in random company"
                    />
                    <ExperienceCard 
                        title="Work experience in random company"
                        line1="Work experience in random company"
                        line2="Work experience in random company"
                        line3="Work experience in random company"
                    />
                    <ExperienceCard 
                        title="Work experience in random company"
                        line1="Work experience in random company"
                        line2="Work experience in random company"
                        line3="Work experience in random company"
                    />
                </div>
            </FadeDiv>
            <FadeDiv delay={3.5}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <ExperienceCard 
                        title="Work experience in random company"
                        line1="Work experience in random company"
                        line2="Work experience in random company"
                        line3="Work experience in random company"
                    />
                    <ExperienceCard 
                        title="Work experience in random company"
                        line1="Work experience in random company"
                        line2="Work experience in random company"
                        line3="Work experience in random company"
                    />
                    <ExperienceCard 
                        title="Work experience in random company"
                        line1="Work experience in random company"
                        line2="Work experience in random company"
                        line3="Work experience in random company"
                    />
                </div>
            </FadeDiv>
        </div>
    );
}

export default ProjectPage;
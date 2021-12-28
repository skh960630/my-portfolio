import React from 'react';

import ExperienceCard from '../cards/ExperienceCard';
import FadeText from '../fades/FadeText';
import FadeDiv from '../fades/FadeDiv';

import './Sections.css';

const ProjectPage = () => { 

    return (
        <div style={{ width: '80vw' }}>
            <div className='title dark-text'>
                <FadeText text="Experience" type="ProjectSubhead" delay={1} />
            </div>
            <div style={{ marginTop: '15vh' }}>
                <FadeDiv delay={3} y='-10vh'>
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
                <FadeDiv delay={3.5} y='-10vh'>
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
        </div>
    );
}

export default ProjectPage;
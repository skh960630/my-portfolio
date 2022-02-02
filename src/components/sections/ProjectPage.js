import React from 'react';

import ExperienceCard from '../contents/ExperienceCard';
import FadeText from '../fades/FadeText';
import FadeDiv from '../fades/FadeDiv';
import FadeUnderline from '../fades/FadeUnderline';

import './Sections.css';

const ProjectPage = () => { 

    return (
        <div style={{ width: '90vw' }}>
            <div className='title dark-text'>
                <FadeUnderline type="Project" delay={0.8} length={20}>
                    <FadeText text="Experience" type="ProjectSubhead" delay={1.5} />
                </FadeUnderline>
            </div>
            <div style={{ marginTop: '15vh' }}>
                <FadeDiv delay={2} y='-10vh' className='divProject'>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <ExperienceCard 
                            title="Life Skills Group - Frontend Internship"
                            line1="Work experience in random company"
                            line2="Work experience in random company"
                            line3="Work experience in random company"
                        />
                        <ExperienceCard 
                            title="My Portfolio Project"
                            line1="Work experience in random company"
                            line2="Work experience in random company"
                            line3="Work experience in random company"
                        />
                        <ExperienceCard 
                            title="Vaccine Passport App Project"
                            line1="Work experience in random company"
                            line2="Work experience in random company"
                            line3="Work experience in random company"
                        />
                    </div>
                </FadeDiv>
                <FadeDiv delay={2.5} y='-10vh' className='divProject'>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <ExperienceCard 
                            title="Barter Service Website Project"
                            line1="Work experience in random company"
                            line2="Work experience in random company"
                            line3="Work experience in random company"
                        />
                        <ExperienceCard 
                            title="ACM ICPC Competition"
                            line1="Work experience in random company"
                            line2="Work experience in random company"
                            line3="Work experience in random company"
                        />
                        <ExperienceCard 
                            title="ITS Internship Program"
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
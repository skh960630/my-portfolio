import React from 'react';

import ExperienceCard from '../card/ExperienceCard';
import FadeText from '../fades/FadeText';
import FadeDiv from '../fades/FadeDiv';
import FadeUnderline from '../fades/FadeUnderline';

import './Sections.css';

const ProjectPage = () => { 

    return (
        <div style={{ width: '90vw' }}>
            <div className='title dark-text'>
                <FadeUnderline type="Project" delay={1.5} length={20} color="#ffce0a">
                    <FadeText text="Experience" type="ProjectSubhead" delay={0.8} />
                </FadeUnderline>
            </div>
            <div style={{ marginTop: '15vh' }}>
                <FadeDiv delay={2} y='-10vh' className='divProject'>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <ExperienceCard 
                            title="Life Skills Group - Frontend Internship"
                            line1="Australia's Edutech Start up Company."
                            line2="ReactJS Frontend Development."
                            line3="NodeJS Backend Development."
                            color="#0492c2"
                            skills={[['React', 70], ['JavaScript', 110], ['MySQL', 80], ['NodeJS', 85]]}
                        />
                        <ExperienceCard 
                            title="My Portfolio Project"
                            line1="Developing a portfolio using ReactJS framework."
                            line2="GSAP JavaScript Animation Platform."
                            gitURL="https://github.com/skh960630/my-portfolio"
                            color="#fc6a03"
                            skills={[['React', 70], ['JavaScript', 110]]}
                        />
                        <ExperienceCard 
                            title="Vaccine Passport App Project"
                            line1="University Thesis Project for honours."
                            line2="Developed using React Native for Android and IOS mobile App."
                            gitURL="https://github.com/skh960630/CovidApp"
                            color="#2e5984"
                            skills={[['React Native', 125], ['JavaScript', 110], ['Firebase', 95], ['Material-UI', 110]]}
                        />
                    </div>
                </FadeDiv>
                <FadeDiv delay={2.5} y='-10vh' className='divProject'>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <ExperienceCard 
                            title="Barter Service Website Project"
                            line1="University Project with 5 team members."
                            line2="Leading colleagues in ReactJS Frontend development."
                            line3="Firebase to manage the backend process."
                            gitURL="https://github.com/AeroX2/service-barter-comp4050"
                            color="#03ac13"
                            skills={[['React', 70], ['JavaScript', 110], ['Firebase', 95], ['Material-UI', 110]]}
                        />
                        <ExperienceCard 
                            title="ACM ICPC Competition"
                            line1="Macquarie University Team."
                            line2="South Pacific Region 2017 & 2019 Divisional Contest."
                            gitURL="https://github.com/skh960630/UVa-Online-Judge"
                            color="#e95c5e"
                            skills={[['JAVA', 66]]}
                        />
                        <ExperienceCard 
                            title="Budget For Children Software Program"
                            line1="University Project to assist Company in India called 'HAQ Centre for Children Right' with 5 team members."
                            line2="Leading colleagues in PHP Frontend development."
                            gitURL="https://github.com/skh960630/BfC"
                            color="#565656"
                            skills={[['PHP', 60]]}
                        />
                    </div>
                </FadeDiv>
            </div>
        </div>
    );
}

export default ProjectPage;
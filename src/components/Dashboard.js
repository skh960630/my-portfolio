import React, { useState, useEffect } from 'react';
import IntroductionPage from './sections/IntroductionPage';
import SkillsPage from './sections/SkillsPage';
import ProjectPage from './sections/ProjectPage';
import ContactPage from './sections/ContactPage';
import '../App.css';

const Dashboard = () => {
    const [section, setSection] = useState(1);
    const [currentY, setCurrentY] = useState(0);
    const [nextScroll, setNextScroll] = useState(null);

    useEffect(() => {
        const setpoint = document.getElementById('sectionTwo').offsetTop * 0.3;
        setNextScroll(setpoint);
        window.scrollTo({ top: 0 });
    }, []);

    return (
        <div className="container">
            <div id='sectionOne' className="section one">
                <IntroductionPage />
            </div>
            <div id='sectionTwo' className="section two">
                <SkillsPage />
            </div>
            <div id='sectionThree' className="section three">
                <ProjectPage />
            </div>
            <div id='sectionFour' className="section four">
                <ContactPage />
            </div>
        </div>
    );
}

export default Dashboard;

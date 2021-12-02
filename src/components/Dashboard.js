import React, { useState, useEffect, useCallback } from 'react';
import IntroductionPage from './sections/IntroductionPage';
import SkillsPage from './sections/SkillsPage';
import ProjectPage from './sections/ProjectPage';
import ContactPage from './sections/ContactPage';
import '../App.css';

const Dashboard = () => {
    const [currentSection, setCurrentSection] = useState(1);
    const [currentSectionY, setCurrentSectionY] = useState(null);
    const [scrollTrigger, setScrollTrigger] = useState(100);

    useEffect(() => {
        setCurrentSectionY(0);
        setScrollTrigger(document.getElementById('sectionTwo').offsetTop * 0.05);
        window.scrollTo({ top: 0 });
        document.body.style.overflow = "hidden";
    }, []);

    // Check if the page needs to be switched
    const checkScroll = useCallback((event) => {
        // Make the scroll slower
        window.scrollTo({ top: document.documentElement.scrollTop+(event.deltaY/50) });

        // Move to next slide if the scroll is at the certain point
        const difference = document.documentElement.scrollTop - currentSectionY;

        if (document.documentElement.scrollTop > 0 && Math.abs(difference) > scrollTrigger) {
            const nextSection = difference > 0 ? currentSection + 1 : currentSection - 1;

            let nextY = null;
            switch (nextSection) {
                case 1:
                    nextY = document.getElementById('sectionOne').offsetTop;
                    break;
                case 2:
                    nextY = document.getElementById('sectionTwo').offsetTop;
                    break;
                case 3:
                    nextY = document.getElementById('sectionThree').offsetTop;
                    break;
                case 4:
                    nextY = document.getElementById('sectionFour').offsetTop;
                    break;
            }

            if (nextY !== null) {
                setCurrentSectionY(nextY);
                setCurrentSection(nextSection);
                window.scrollTo({ top: nextY, behavior: 'smooth' });
            }
        }
    }, [currentSectionY, setCurrentSectionY, scrollTrigger, currentSection, setCurrentSection]);

    // Manually change scroll event
    useEffect(() => {
        window.addEventListener('wheel', checkScroll);
        // window.addEventListener('resize', );
          
        return () => {
            window.removeEventListener('wheel', checkScroll);
            // window.removeEventListener('resize', );
        }
    }, [checkScroll]);

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

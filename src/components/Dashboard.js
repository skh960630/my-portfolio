import React, { useState, useEffect, useCallback } from 'react';
import IntroductionPage from './sections/IntroductionPage';
import SkillsPage from './sections/SkillsPage';
import ProjectPage from './sections/ProjectPage';
import ContactPage from './sections/ContactPage';
import ProgressBar from './animations/ProgressBar';
import '../App.css';

const Dashboard = () => {
    const [currentSection, setCurrentSection] = useState(1);
    const [currentHeight, setCurrentHeight] = useState(0);
    const [scrollTrigger, setScrollTrigger] = useState(0);
    const [progress, setProgress] = useState(0);
    const [moving, setMoving] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0 });
        document.body.style.overflow = "hidden";
    }, []);

    useEffect(() => {
        setProgress((currentSection-1)*25);
    }, [currentSection]);

    // Check if the page needs to be switched
    const checkScroll = (event) => {
        if (!moving) {
            // Make the scroll slower
            const scrollTo = document.documentElement.scrollTop+(event.deltaY/20);
            window.scrollTo({ top: scrollTo });
            setScrollTrigger(scrollTo-currentHeight);
            setMoving(true);

            // Move to next slide if the scroll is at a certain point
            if (document.documentElement.scrollTop > 0 && Math.abs(scrollTrigger) > 80) {
                const nextSection = scrollTrigger > 0 ? currentSection + 1 : currentSection - 1;

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

                setScrollTrigger(0);
                setCurrentSection(nextSection);
                setCurrentHeight(nextY);

                window.scrollTo({ top: nextY, behavior: 'smooth' });
                setTimeout(() => {
                    setMoving(false);
                }, 1000);
            } else {
                setTimeout(() => {
                    setMoving(false);
                }, 30);
            }
        }
    };

    // Manually change scroll event
    useEffect(() => {
        window.addEventListener('wheel', checkScroll, { passive: true });
        // window.addEventListener('resize', );
          
        return () => {
            window.removeEventListener('wheel', checkScroll);
            // window.removeEventListener('resize', );
        }
    }, [moving, scrollTrigger]);

    return (
        <div className="container">
            <ProgressBar progress={progress} />
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

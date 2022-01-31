import React, { useState, useEffect, useCallback } from 'react';
import IntroductionPage from './sections/IntroductionPage';
import SkillsPage from './sections/SkillsPage';
import ProjectPage from './sections/ProjectPage';
import ContactPage from './sections/ContactPage';
import ProgressBar from './contents/ProgressBar';
import '../App.css';

const Dashboard = () => {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [currentSection, setCurrentSection] = useState(1);
    const [currentHeight, setCurrentHeight] = useState(0);
    const [scrollTrigger, setScrollTrigger] = useState(0);
    const [progress, setProgress] = useState(0);
    const [progressColor, setProgressColor] = useState({ barColor: "whitesmoke", backgroundColor: "#A9A9A9" });
    const [moving, setMoving] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0 });
        document.body.style.overflow = "hidden";
    }, []);

    useEffect(() => {
        setProgress((currentSection-1)*33+1);
    }, [currentSection]);

    // Reset the location when there is a window size change
    const handleResize = () => {
        if (windowHeight !== window.innerHeight) {
            let offsetTop = null;

            switch (currentSection) {
                case 1:
                    offsetTop = document.getElementById('sectionOne').offsetTop;
                    break;
                case 2:
                    offsetTop = document.getElementById('sectionTwo').offsetTop;
                    break;
                case 3:
                    offsetTop = document.getElementById('sectionThree').offsetTop;
                    break;
                case 4:
                    offsetTop = document.getElementById('sectionFour').offsetTop;
                    break;
            }

            setCurrentHeight(offsetTop);
            setScrollTrigger(0);
            setWindowHeight(window.innerHeight);

            window.scrollTo({ top: offsetTop });
        }
    }

    // Check if the page needs to be switched
    const checkScroll = (event) => {
        if (!moving) {
            // Make the scroll slower
            const scrollTo = document.documentElement.scrollTop+(event.deltaY/20);

            window.scrollTo({ top: scrollTo });
            setScrollTrigger(scrollTo-currentHeight);
            setMoving(true);

            // Move to next slide if the scroll is at a certain point
            if (document.documentElement.scrollTop > 0 && Math.abs(scrollTrigger) > 40) {
                const nextSection = scrollTrigger > 0 ? currentSection + 1 : currentSection - 1;

                let nextY = null;
                switch (nextSection) {
                    case 1:
                        nextY = document.getElementById('sectionOne').offsetTop;
                        setProgressColor({ barColor: "whitesmoke", backgroundColor: "#A9A9A9" });
                        break;
                    case 2:
                        nextY = document.getElementById('sectionTwo').offsetTop;
                        setProgressColor({ barColor: "#505050", backgroundColor: "#A9A9A9" });
                        break;
                    case 3:
                        nextY = document.getElementById('sectionThree').offsetTop;
                        setProgressColor({ barColor: "whitesmoke", backgroundColor: "#A9A9A9" });
                        break;
                    case 4:
                        nextY = document.getElementById('sectionFour').offsetTop;
                        setProgressColor({ barColor: "#ffce0a", backgroundColor: "#A9A9A9" });
                        break;
                }

                setScrollTrigger(0);
                setCurrentSection(nextSection);
                setCurrentHeight(nextY);

                window.scrollTo({ top: nextY, behavior: 'smooth' });
                setTimeout(() => {
                    setMoving(false);
                }, 2000);
            } else {
                setTimeout(() => {
                    setMoving(false);
                }, 40);
            }
        }
    };

    // Manually change scroll event
    useEffect(() => {
        window.addEventListener('wheel', checkScroll, { passive: true });
        window.addEventListener('resize', handleResize);
          
        return () => {
            window.removeEventListener('wheel', checkScroll);
            window.removeEventListener('resize', handleResize);
        }
    }, [moving, scrollTrigger, currentHeight]);

    return (
        <div className="container">
            <ProgressBar progress={progress} progressColor={progressColor} />
            <div id='sectionFour' className="section four">
                <ContactPage />
            </div>
            <div id='sectionOne' className="section one">
                <IntroductionPage />
            </div>
            <div id='sectionTwo' className="section two">
                <ProjectPage />
            </div>
            <div id='sectionThree' className="section three">
                <SkillsPage />
            </div>
        </div>
    );
}

export default Dashboard;

import React, { useState, useEffect } from 'react';
import IntroductionPage from './sections/IntroductionPage';
import SkillsPage from './sections/SkillsPage';
import ProjectPage from './sections/ProjectPage';
import ContactPage from './sections/ContactPage';
import ProgressBar from './progressbar/ProgressBar';
import '../App.css';

const Dashboard = () => {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [currentSection, setCurrentSection] = useState(1);
    const [scrollTrigger, setScrollTrigger] = useState(0);
    const [progress, setProgress] = useState(0);
    const [progressColor, setProgressColor] = useState({ barColor: "whitesmoke", backgroundColor: "#A9A9A9" });
    const [moving, setMoving] = useState(false);
    const [manualColor, setManualcolor] = useState({ background: 'lightsalmon', scroll: '#ffce0a' });

    useEffect(() => {
        setMoving(true);
        setWindowHeight(0);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setCurrentSection(1);
        setTimeout(() => {
            setScrollTrigger(0);
            setMoving(false);
        }, 1000);
        document.body.style.overflow = "hidden";
    }, []);

    useEffect(() => {
        setProgress((currentSection-1)*33+1);
    }, [currentSection]);

    useEffect(() => {
        currentSection === 4 && setProgressColor({ barColor: manualColor.scroll, backgroundColor: "#A9A9A9" });
    }, [manualColor, currentSection]);

    // Switch the scroll power
    const switchScrollTo = (deltaY) => {
        const direction = deltaY >= 0 ? 1 : -1;
        const delta = Math.abs(deltaY);

        if (delta > 0 && delta < 100) {
            return 1 * direction;
        } else if (delta >= 100 && delta < 200) {
            return 2 * direction;
        } else if (delta >= 200 && delta < 300) {
            return 3 * direction;
        } else if (delta >= 300) {
            return 4 * direction;
        }

        return 0;
    }

    // Manually change scroll event
    useEffect(() => {
        // Check if the page needs to be switched
        const checkScroll = (event) => {
            if (!moving) {
                // Make the scroll slower
                const scrollTo = document.documentElement.scrollTop+switchScrollTo(event.deltaY);

                window.scrollTo({ top: scrollTo });
                setScrollTrigger(scrollTrigger+switchScrollTo(event.deltaY));

                // Move to next slide if the scroll is at a certain point
                if (document.documentElement.scrollTop > 0 && Math.abs(scrollTrigger) > 10) {
                    let nextSection = scrollTrigger > 0 ? currentSection + 1 : currentSection - 1;
                    
                    if (nextSection > 4 || nextSection < 1) {
                        nextSection = currentSection;
                    }

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
                            setProgressColor({ barColor: manualColor.scroll, backgroundColor: "#A9A9A9" });
                            break;
                        default:
                            break;
                    }

                    setMoving(true);

                    window.scrollTo({ top: nextY, behavior: 'smooth' });
                    setCurrentSection(nextSection);
                    setTimeout(() => {
                        setScrollTrigger(0);
                        setMoving(false);
                    }, 1000);
                }
            }
        };

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
                    default:
                        break;
                }

                setScrollTrigger(0);
                setWindowHeight(window.innerHeight);

                window.scrollTo({ top: offsetTop });
            }
        }

        window.addEventListener('wheel', checkScroll, { passive: true });
        window.addEventListener('resize', handleResize);
          
        return () => {
            window.removeEventListener('wheel', checkScroll);
            window.removeEventListener('resize', handleResize);
        }
    }, [moving, scrollTrigger, windowHeight, currentSection, manualColor]);

    return (
        <div className="container">
            <ProgressBar progress={progress} progressColor={progressColor} />
            <div id='sectionOne' className="section one">
                <IntroductionPage />
            </div>
            <div id='sectionTwo' className="section two">
                <ProjectPage />
            </div>
            <div id='sectionThree' className="section three">
                <SkillsPage />
            </div>
            <div id='sectionFour' className="section" style={{ background: manualColor.background }}>
                <ContactPage setManualcolor={setManualcolor} />
            </div>
        </div>
    );
}

export default Dashboard;

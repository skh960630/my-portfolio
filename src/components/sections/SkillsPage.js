import React from 'react';

import FadeText from '../fades/FadeText';
import FadeUnderline from '../fades/FadeUnderline';
import FadeDiv from '../fades/FadeDiv';
import SkillBar from '../contents/SkillBar';

import './Sections.css';

const SkillsPage = () => {

    return (
        <div style={{ width: '90vw' }}>
            <div className='title'>
                <FadeUnderline type="Skills" delay={1.5} length={10}>
                    <FadeText text="Skills" type="SkillsSubhead" delay={0.8} />
                </FadeUnderline>
            </div>
            <div className='skills-container'>
                <FadeDiv delay={2} y='-2vh' className='divSkill'>
                    <SkillBar name="JAVA" gauge={90} />
                </FadeDiv>
                <FadeDiv delay={2.1} y='-2vh' className='divSkill'>
                    <SkillBar name="JAVASCRIPT" gauge={90} />
                </FadeDiv>
                <FadeDiv delay={2.2} y='-2vh' className='divSkill'>
                    <SkillBar name="HTML/CSS" gauge={80} />
                </FadeDiv>
                <FadeDiv delay={2.3} y='-2vh' className='divSkill'>
                    <SkillBar name="REACT.JS" gauge={80} />
                </FadeDiv>
                <FadeDiv delay={2.4} y='-2vh' className='divSkill'>
                    <SkillBar name="GIT" gauge={40} />
                </FadeDiv>
                <FadeDiv delay={2.5} y='-2vh' className='divSkill'>
                    <SkillBar name="NODE.JS" gauge={40} />
                </FadeDiv>
                <FadeDiv delay={2.6} y='-2vh' className='divSkill'>
                    <SkillBar name="PYTHON" gauge={30} />
                </FadeDiv>
            </div>
        </div>
    );
}

export default SkillsPage;
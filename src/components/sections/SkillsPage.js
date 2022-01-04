import React from 'react';

import FadeText from '../fades/FadeText';
import FadeUnderline from '../fades/FadeUnderline';
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
                <SkillBar name="JAVA" gauge={90} />
                <SkillBar name="JAVASCRIPT" gauge={90} />
                <SkillBar name="HTML/CSS" gauge={80} />
                <SkillBar name="REACT.JS" gauge={80}/>
                <SkillBar name="GIT" gauge={40} />
                <SkillBar name="NODE.JS" gauge={40} />
                <SkillBar name="PYTHON" gauge={30} />
            </div>
        </div>
    );
}

export default SkillsPage;
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
                <SkillBar name="Java" gauge={90} />
                <SkillBar name="html/css" gauge={90} />
                <SkillBar name="React.js" gauge={90}/>
                <SkillBar name="Node.js" gauge={50} />
            </div>
        </div>
    );
}

export default SkillsPage;
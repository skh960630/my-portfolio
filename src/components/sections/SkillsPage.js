import React from 'react';
import FadeText from '../fades/FadeText';
import FadeUnderline from '../fades/FadeUnderline';

import './Sections.css';

const SkillsPage = (props) => {

    return (
        <div style={{ width: '90vw' }}>
            <div className='title'>
                <FadeUnderline type="Skills" delay={1.5} length={10}>
                    <FadeText text="Skills" type="SkillsSubhead" delay={0.8} />
                </FadeUnderline>
            </div>
        </div>
    );
}

export default SkillsPage;
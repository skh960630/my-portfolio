import React from 'react';
import FadeText from '../fades/FadeText';

import './Sections.css';

const SkillsPage = (props) => {

    return (
        <div style={{ width: '80vw' }}>
            <div className='title'>
                <FadeText text="Skills" type="SkillsSubhead" delay={1} />
            </div>
        </div>
    );
}

export default SkillsPage;

import React from 'react';
import './Card.css';

const SkillCircle = ({ color, text, width }) => {

    return (
        <div className='Skill-Circle' style={{ backgroundColor: color, width: `${width}px` }}>
            {text}
        </div>
    )
}

export default SkillCircle;
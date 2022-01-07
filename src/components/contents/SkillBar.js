import React from 'react';

import './Contents.css';

const SkillBar = ({ name, gauge }) => {
    const gaugeBar = {
        width: `${gauge}%`,
        height: '100%',
        backgroundColor: '#ffce0a',
        borderRadius: '10px',
    }

    return (
        <div className="Skillbar">
            <h1 style={{ marginLeft: '1.5%', fontSize: '1vw' }} >{name}</h1>
            <div className="barContainer">
                <div style={gaugeBar}>
                    <h1 style={{ fontSize: '0.9vw',
                                color: 'rgb(80, 80, 80)', 
                                textAlign: 'right',
                                marginRight: '1%' }}>
                        {gauge}%
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default SkillBar;
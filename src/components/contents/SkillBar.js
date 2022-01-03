import React from 'react';

const SkillBar = ({ name, gauge }) => {
    const barContainer = {
        width: '100%',
        height: '2vh',
        backgroundColor: 'white',
        borderRadius: '10px',
        margin: '2vh',
    };

    const gaugeBar = {
        width: `${gauge}%`,
        height: '100%',
        backgroundColor: '#ffce0a',
        borderRadius: '10px',
    }

    return (
        <div>
            <div style={{ marginLeft: '1.5%' }} ><h1>{name}</h1></div>
            <div style={barContainer}>
                <div style={gaugeBar}>
                </div>
            </div>
        </div>
    );
}

export default SkillBar;
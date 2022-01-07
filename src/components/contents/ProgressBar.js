import React from 'react';

const ProgressBar = ({ progress, progressColor }) => {
    const parentBar = {
        position: 'fixed',
        height: '30vh',
        width: 10,
        backgroundColor: progressColor.backgroundColor,
        borderRadius: 40,
        marginLeft: '95vw',
        marginTop: '30vh',
    }

    const childBar = {
        height: `${progress}%`,
        width: '100%',
        backgroundColor: progressColor.barColor,
        borderRadius: 40,
        textAlign: 'right',
    }

    return (
        <div style={parentBar}>
            <div style={childBar}>
            </div>
        </div>
    );
}

export default ProgressBar;
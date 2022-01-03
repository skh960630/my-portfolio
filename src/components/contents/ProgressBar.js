import React from 'react';

const ProgressBar = ({ progress }) => {
    const parentBar = {
        position: 'fixed',
        height: '30vh',
        width: 10,
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        marginLeft: '95vw',
        marginTop: '30vh',
    }

    const childBar = {
        height: `${progress}%`,
        width: '100%',
        backgroundColor: "#99ccff",
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
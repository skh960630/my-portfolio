import React from 'react';

import './ColorPicker.css';

const ColorPicker = ({ colorPick, setColorPick }) => {

    return (
        <div className='color-picker'>
            <div
                className={`color-button ${colorPick === 1 ? 'selected' : ''}`}
                onClick={() => { setColorPick(1) }}
            >
                <div 
                    className={`circle ${colorPick === 1 ? 'selected' : 'unselected'}`} 
                    style={{ backgroundColor: 'lightsalmon' }} />
                <div 
                    className={`circle ${colorPick === 1 ? 'selected' : 'unselected'}`} 
                    style={{ backgroundColor: '#ffce0a' }} />
                <div 
                    className={`circle ${colorPick === 1 ? 'selected' : 'unselected'}`} 
                    style={{ backgroundColor: 'rgb(53, 56, 57)' }} />
            </div>
            <div
                className={`color-button ${colorPick === 2 ? 'selected' : ''}`}
                onClick={() => { setColorPick(2) }}
                style={{ margin: '1%' }}
            >
                <div 
                    className={`circle ${colorPick === 2 ? 'selected' : 'unselected'}`} 
                    style={{ backgroundColor: 'lightsalmon' }} />
                <div 
                    className={`circle ${colorPick === 2 ? 'selected' : 'unselected'}`} 
                    style={{ backgroundColor: '#ffce0a' }} />
                <div 
                    className={`circle ${colorPick === 2 ? 'selected' : 'unselected'}`} 
                    style={{ backgroundColor: 'rgb(53, 56, 57)' }} />
            </div>
            <div
                className={`color-button ${colorPick === 3 ? 'selected' : ''}`}
                onClick={() => { setColorPick(3) }}
            >
                <div 
                    className={`circle ${colorPick === 3 ? 'selected' : 'unselected'}`} 
                    style={{ backgroundColor: 'lightsalmon' }} />
                <div 
                    className={`circle ${colorPick === 3 ? 'selected' : 'unselected'}`} 
                    style={{ backgroundColor: '#ffce0a' }} />
                <div 
                    className={`circle ${colorPick === 3 ? 'selected' : 'unselected'}`} 
                    style={{ backgroundColor: 'rgb(53, 56, 57)' }} />
            </div>
        </div>
    );
}

export default ColorPicker;
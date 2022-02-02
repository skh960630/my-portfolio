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
                    style={{ backgroundColor: '#353839' }} />
            </div>
            <div
                className={`color-button ${colorPick === 2 ? 'selected' : ''}`}
                onClick={() => { setColorPick(2) }}
                style={{ margin: '1%' }}
            >
                <div 
                    className={`circle ${colorPick === 2 ? 'selected' : 'unselected'}`} 
                    style={{ backgroundColor: '#655d8a' }} />
                <div 
                    className={`circle ${colorPick === 2 ? 'selected' : 'unselected'}`} 
                    style={{ backgroundColor: '#fdceb9' }} />
                <div 
                    className={`circle ${colorPick === 2 ? 'selected' : 'unselected'}`} 
                    style={{ backgroundColor: '#7897ab' }} />
            </div>
            <div
                className={`color-button ${colorPick === 3 ? 'selected' : ''}`}
                onClick={() => { setColorPick(3) }}
            >
                <div 
                    className={`circle ${colorPick === 3 ? 'selected' : 'unselected'}`} 
                    style={{ backgroundColor: '#353839' }} />
                <div 
                    className={`circle ${colorPick === 3 ? 'selected' : 'unselected'}`} 
                    style={{ backgroundColor: '#F0E68C' }} />
                <div 
                    className={`circle ${colorPick === 3 ? 'selected' : 'unselected'}`} 
                    style={{ backgroundColor: '#ff6600' }} />
            </div>
        </div>
    );
}

export default ColorPicker;
import React from 'react';

import './Card.css';

const FrontCard = () => { 
    return (
        <div className='frontCard'>
            <div className='vertical-line-front'>
            </div>
            <div style={{ paddingTop: '5%' }}>
                <div className='job-title'>
                    Frontend Developer
                </div>
                <div className='horizontal-line'>
                </div>
            </div>
            <div className='name-style'>
                Kane Shin
            </div>
        </div>
    );
}

export default FrontCard;
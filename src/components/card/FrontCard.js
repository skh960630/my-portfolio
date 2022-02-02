import React from 'react';

import './Card.css';

const FrontCard = ({ colorList }) => { 
    console.log(colorList);
    return (
        <div className='frontCard' style={{ backgroundColor: colorList.color3 }}>
            <div className='vertical-line-front' style={{ borderLeft: `10px solid ${colorList.color2}` }}>
            </div>
            <div style={{ paddingTop: '5%' }}>
                <div className='job-title'>
                    Frontend Developer
                </div>
                <div className='horizontal-line' style={{ borderTop: `10px solid ${colorList.color2}` }}>
                </div>
            </div>
            <div className='name-style'>
                Kane Shin
            </div>
        </div>
    );
}

export default FrontCard;
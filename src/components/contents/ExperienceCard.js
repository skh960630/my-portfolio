import React from 'react';
import './Contents.css';

const ExperienceCard = ({ title, line1, line2, line3 }) => {
    return (
        <div className='Experience-Card'>
            <div className="Card-title">
                <div style={{ paddingLeft: '2%', paddingTop: '3%' }}>
                    {title}
                </div>
            </div>
            <div className="content">
                <div style={{ padding: '2%' }}>
                    {line1}
                    {line2}
                    {line3}
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard;
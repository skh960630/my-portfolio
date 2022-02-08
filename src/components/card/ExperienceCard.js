import React from 'react';
import './Card.css';

const ExperienceCard = ({ title, line1, line2, line3 }) => {
    return (
        <div className='Experience-Card'>
            <div className="Card-title">
                {title}
            </div>
            <div className="content">
                <div style={{ padding: '2%' }}>
                    <div>
                        {line1}
                    </div>
                    <div>
                        {line2}
                    </div>
                    <div>
                        {line3}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard;
import React from 'react';

import './Card.css';

const FrontCard = () => { 
    return (
        <>
            <div className='vertical-line-front'>
            </div>
            <div style={{ paddingTop: '5%' }}>
                <div style={{ marginLeft: '10%', paddingTop: '5%', paddingBottom: '5%', 
                            fontSize: '40px', fontWeight: 'bold',  fontFamily: 'Arial' }}>
                    Frontend Developer
                </div>
                <div className='horizontal-line'>
                </div>
            </div>
            <div style={{ textAlign: 'right', paddingRight: '4%', paddingTop: '30%', fontSize: '30px', 
                        fontWeight: 'bold',  fontStyle: 'oblique',  fontFamily: 'Arial' }}>
                Kane Shin
            </div>
        </>
    );
}

export default FrontCard;
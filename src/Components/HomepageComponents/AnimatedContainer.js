import React from 'react';
import "./AnimatedContainer.css";
import 'boxicons';

const AnimatedContainer = () => {
    return (
        <div className="animated-container">
            
                {[...Array(4)].map((_, i) => (

                    <div
                        key={i}
                        className={`moving-container`}
                        style={{
                            animationDelay: `${i * 3.6}s`,                    
                        }}
                    >
                        <div className='moving-container-materials'>
                            <p>“Great rental experience! The house was clean, spacious, and exactly as described. Landlord was responsive and addressed any issues promptly. Convenient location with amenities </p>
                            <div className='star-icons'>
                                <box-icon name='star' size="36px" type='solid' color='#ffac33' ></box-icon>
                                <box-icon name='star' size="36px" type='solid' color='#ffac33' ></box-icon>
                                <box-icon name='star' size="36px" type='solid' color='#ffac33' ></box-icon>
                                <box-icon name='star' size="36px" type='solid' color='#ffac33' ></box-icon>
                            </div>
                            <div className='date'><p>31 May</p></div>
                        </div>
                    </div>
                ))}
                           
        </div>
    )
}

export default AnimatedContainer;
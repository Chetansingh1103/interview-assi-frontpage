import React from 'react';
import "./Homepage.css";
import AnimatedContainer from '../Components/HomepageComponents/AnimatedContainer';

const Homepage = () => {
    return (
        <div className='homepage'>
            <div className='container-top'>
                <div className='container-top-left'>
                    <h1>The solutions offered through Rentorium will help you rent right. We believe that Rental success is a choice. Choose Rentorium, choose success.</h1>
                    <button className='button'>Sign up - its free.</button>
                </div>
                <div className='container-top-right'>
                    <img className="background-image"  src={require("../images/background.png")} alt='background'/>
                   
                    <AnimatedContainer/>
                    
                    
                </div>
            </div> 
        </div>
    )
}

export default Homepage;
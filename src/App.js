import React from 'react';
import "./App.css";
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Navbar from './Components/common/Navbar';

const App = () => {
    return (
        <div className='app'>

        <Navbar/>

        <Routes>
            <Route path='/' element={<Homepage/>} />

        </Routes>
            
        </div>
    );
}

export default App;
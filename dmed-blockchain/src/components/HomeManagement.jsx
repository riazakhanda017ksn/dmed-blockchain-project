import React from 'react';
import Login from './Login';

const HomeManagement = () => {
    return (
        <div className='home'>
            <div className="user-title">
                <h1>WELCOME TO </h1>
                <h2>Food Traceability System</h2>
            </div>
            <div className="login">
                <Login/>
            </div>
        </div>
    );
};

export default HomeManagement;
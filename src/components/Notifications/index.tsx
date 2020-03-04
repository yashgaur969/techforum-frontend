import * as React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const Notifications: React.FC= () => {
    return (
        <div>
            <Link to="/Home">Home</Link><br></br>
            <Link to="/notifications">Notifications</Link><br></br>
            <Link to="/profile">Profile</Link>
        </div>
        
    );
}
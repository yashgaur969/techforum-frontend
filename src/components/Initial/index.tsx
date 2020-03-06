import * as React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Dashboard from '../Dashboard';
import Popular from '../Popular';

export const Initial: React.FC= () => {
    return (
        <div className="initial-container">
            <div className="initial-header">
                <div><p>StarkTech</p></div>
                <div className="search-bar"><input type="text" placeholder="search" name="search-bar" /></div>
                <div className="links"><Link to="/login">Login</Link> or <Link to="/signup">SignUp</Link></div>
            </div>
            <div className="dashboard-popular">
                <div><Dashboard /></div>
                <div className="popular-question"><p><b>Popular Questions</b></p>
                    <div><Popular /></div>
                </div>
            </div>
        </div>


    )
}
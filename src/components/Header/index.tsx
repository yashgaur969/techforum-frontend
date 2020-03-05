import * as React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const Header: React.FC= () => {

    const onLogout = (event:any)=>{
        localStorage.clear()
    
    }
    return (
        <div className="header-class">
                <div><p>StarkTech</p></div>
                <div className="search-bar"><input type="text" placeholder="search" name="search-bar"/></div>
                {/* <div className="links"><Link to="/login">Login</Link> or <Link to="/">SignUp</Link></div> */}
                <div className="logout-btn"><button type="submit" value="next" onClick={onLogout}><Link to="/login">logout</Link></button></div>
            </div>
    )
}
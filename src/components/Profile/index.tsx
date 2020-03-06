import * as React from 'react';
import './style.css';

import { Header } from '../Header';
import { Navigator } from '../Navigator';
import UserInfo from '../UserInfo';
import UserPost from '../../UserPost';


export const Profile: React.FC= () => {
    return (
        <div className="profile-container">
            <div><Header /></div>
            <div className="profile-second-row">
                <div><Navigator /></div>
                <div className="userpost-image">
                    <div className="color-background"></div>
                    <div className="userpost-details">
                        <div><UserPost /></div>
                        <div className="user-details-aside"><UserInfo /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
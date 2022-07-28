import React from 'react';
import './NavigationHeaderStyles.css'
import {Link} from "react-router-dom";

function NavigationHeader() {
    return (
        <div className="navigation-container">
            <Link to="/" className="navigation-links">Home</Link>
            <Link to="/login" className="navigation-links">About Us</Link>
            <Link to="/login" className="navigation-links">Login</Link>
        </div>
    );
}

export default NavigationHeader;
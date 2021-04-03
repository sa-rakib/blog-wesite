import React from 'react';
import './header.css';
const Header = () => {
    return (
        <header className="header">
            <nav className="headerMenu">
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
            </nav>
            <div>
                social media links
            </div>
        </header>
    );
};

export default Header;
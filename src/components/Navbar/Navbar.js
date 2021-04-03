import { Search } from '@material-ui/icons';
import React, { useState } from 'react';
import './navbar.css';
const Navbar = (props) => {
    
    const [search, setSearch] = useState(false)

    const submitSearch = (e) => {
        e.preventDefault();
        alert('Search');
    }
    const openSearch = () => {
        setSearch(true);
    }
    const searchClass = search ? 'searchInput active' : 'searchInput';
    return (
        <div className="navbar">
            <ul className="navbarMenu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#posts">Posts</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
            <div className="navbarSearch">
                <form className="formSearch" onSubmit={submitSearch}>
                    <input className={searchClass} placeholder="Search" />
                    <Search onClick={openSearch} className="searchIcon" />
                </form>
            </div>
        </div>
    );
};

export default Navbar;
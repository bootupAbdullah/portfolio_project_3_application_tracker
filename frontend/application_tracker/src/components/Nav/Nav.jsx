import React from 'react';
import './Nav.css'; // Assuming you have a CSS file for styling

const Navbar = ({displayPage}) => {
    return (
      <div className="navbar-flex-container">
        <nav className="navbar">
            <button className="nav-button nav-dashboard" onClick={displayPage} value="Dashboard">Dashboard</button>
            <button className="nav-button nav-add-application" onClick={displayPage} value="Create">Add Application</button>
        </nav>
      </div> 
    );
};

export default Navbar;
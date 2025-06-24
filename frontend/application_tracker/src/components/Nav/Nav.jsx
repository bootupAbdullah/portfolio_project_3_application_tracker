import './Nav.css';
import InfoToolTip from './InfoToolTip/InfoToolTip';

const Navbar = ({displayPage, currentPage = "Dashboard"}) => {
    return (
      <div className="navbar-flex-container">
        <nav className="navbar">
            <button 
              className={`nav-button nav-dashboard ${currentPage === "Dashboard" ? "active" : ""}`} 
              onClick={displayPage} 
              value="Dashboard"
            >
              Dashboard
            </button>
            <button 
              className={`nav-button nav-add-application ${currentPage === "Create" ? "active" : ""}`} 
              onClick={displayPage} 
              value="Create"
            >
              Add Application
            </button>
            <InfoToolTip />
        </nav>
      </div> 
    );
};

export default Navbar;
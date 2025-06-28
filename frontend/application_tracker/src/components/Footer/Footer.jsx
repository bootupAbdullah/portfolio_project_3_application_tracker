import { useState } from 'react';
import './Footer.css'

const Footer = () => {
  const [showFooterTooltip, setShowFooterTooltip] = useState(false)
  
  return (
    <footer className='app-footer'>
      <div className='github-container'
        onMouseEnter={() => setShowFooterTooltip(true)}
        onMouseLeave={() => setShowFooterTooltip(false)}
      >
        <a href="https://github.com/bootupAbdullah/portfolio_project_3_application_tracker.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img 
            className='social-icon-basic-footer'
            src="github-142.svg"
            alt="GitHub"
          />
        </a>
        
        {showFooterTooltip && (
          <div className="github-view-source-tooltip">
            <p className='tooltip-text'>View source on GitHub</p>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
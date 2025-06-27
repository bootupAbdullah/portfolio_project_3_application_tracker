import './Footer.css'

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className='github-svg'>
        <a
        href="https://github.com/bootupAbdullah"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className='social-icon-basic'
              src="images/svg/github-142-svgrepo-com.svg"
              alt="GitHub"
            />
          </a>

      </div>
    </footer>
  );
};

export default Footer;
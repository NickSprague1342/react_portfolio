import React from 'react';
import './Footer.css';   // Import the CSS for the Footer component

const Footer = () => {
return (
    <footer>
    <p>&copy; {new Date().getFullYear()} Developer's Portfolio</p>
    <div className="social-links">
        <a href="GitHub" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="LinkedIn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
    </footer>
);
};

export default Footer;
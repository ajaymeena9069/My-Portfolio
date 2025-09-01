import React from 'react';
import { FaArrowUp, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-container container">
        
        {/* Footer Text */}
        <div className="footer-text">
          <p>Copyright &copy; 2025 by Ajay Meena | All Rights Reserved.</p>
        </div>

        {/* Social Links */}
        <div className="footer-socials">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </div>

        {/* Back to Top Button */}
        <div className="footer-iconTop">
          <a href="#"><FaArrowUp className='footer-icon-up'/></a>
        </div>

      </div>
    </footer>
  )
}

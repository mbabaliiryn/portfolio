import React from 'react';

const Footer = () => (
  <div className="global-footer">
    <h1 className="social-media">See more projects </h1>
    <div className="social-links">

      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/mbabali-iryn/" rel="noopener noreferrer" target="_blank">
        <i className="fa fa-linkedin-square" aria-hidden="true" />
      </a>

      {/* Github */}
      <a href="https://github.com/mbabaliiryn" rel="noopener noreferrer" target="_blank">
        <i className="fa fa-github-square" aria-hidden="true" />
      </a>

    </div>
  </div>
);

export default Footer;

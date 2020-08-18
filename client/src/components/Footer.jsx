import React, { Component } from 'react';
import twitterLogo from '../img/twitter.png';
import igLogo from '../img/instagram.png'

class Footer extends Component {
  render() {
    return (
      <footer className="footer-container">
        <div className="footer-content"><span><strong>SZN.IO™️ | All Rights Reserved ©️ 2020</strong></span></div>
        <div className="footer-social">
          <a hre="https://www.twitter.com"><img src={twitterLogo} alt="#"/></a>
          <h1>|</h1>
          <a href="https://www.instagram.com"><img src={igLogo} alt=""/></a>
        </div>
      </footer>
    );
  }
}
export default Footer;
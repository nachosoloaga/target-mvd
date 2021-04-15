import React from 'react';
import { ReactComponent as Iphone } from 'assets/i6.svg';
import appStoreImg from 'assets/appstore.png';
import fbIconImg from 'assets/facebook-icon.png';
import twitterIconImg from 'assets/twitter-icon.png';

const SocialMediaContainer = () => {
  return (
    <div className="social-media-container">
      <div className="iphone-container">
        <Iphone />
      </div>
      <div className="app-store-container">
        <a href="https://www.apple.com/">
          <img src={appStoreImg} alt="App Store" />
        </a>
      </div>
      <div className="social-links-container">
        <a href="https://www.facebook.com/">
          <img src={fbIconImg} alt="Facebook Icon" />
        </a>
        <a href="https://www.twitter.com/">
          <img src={twitterIconImg} alt="Twitter Icon" />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaContainer;

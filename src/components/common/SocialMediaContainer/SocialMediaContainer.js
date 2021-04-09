import React from 'react';
import 'components/common/SocialMediaContainer/social-media-container.scss';
import { ReactComponent as Iphone } from 'assets/i6.svg';
import appStoreImg from 'assets/appstore.png'; // with import
import socialLinksImg from 'assets/socialnetworks.png';

const SocialMediaContainer = () => {
  return (
    <div className="social-media-container">
      <div className="iphone-container">
        <Iphone />
      </div>
      <div className="app-store-container">
        <a href="">
          <img src={appStoreImg} alt="App Store" />
        </a>
      </div>
      <div className="social-links-container">
        <a href="">
          <img src={socialLinksImg} alt="Social Links" />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaContainer;

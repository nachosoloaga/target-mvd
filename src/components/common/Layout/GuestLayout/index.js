import React from 'react';
import { ReactComponentLike } from 'prop-types';

import Menu from '../../HamburgerMenu';
import SocialMediaContainer from '../../SocialMediaContainer';

const GuestLayout = ({ children }) => {
  return (
    <div className="login-page-container">
      <Menu />
      <div className="main">{children}</div>
      <SocialMediaContainer />
    </div>
  );
};

GuestLayout.propTypes = {
  children: ReactComponentLike
};

export default GuestLayout;

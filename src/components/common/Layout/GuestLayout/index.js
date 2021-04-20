import React, { memo } from 'react';
import { node } from 'prop-types';

import Menu from '../../HamburgerMenu';
import SocialMediaContainer from '../../SocialMediaContainer';

const GuestLayout = ({ children }) => {
  return (
    <div className="page-container">
      <Menu />
      <div className="main">{children}</div>
      <SocialMediaContainer />
    </div>
  );
};

GuestLayout.propTypes = {
  children: node.isRequired
};

export default memo(GuestLayout);

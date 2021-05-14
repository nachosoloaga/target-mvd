import React, { memo, useState } from 'react';
import { node } from 'prop-types';

import ContactForm from 'components/common/ContactForm';
import Menu from '../../HamburgerMenu';
import SocialMediaContainer from '../../SocialMediaContainer';

const GuestLayout = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModalOpen = () => {
    debugger;
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="guest-layout-container">
      <Menu handleModal={toggleModalOpen} />
      <div className="main">
        {children}
        <ContactForm isOpen={isModalOpen} handleModal={toggleModalOpen} />
      </div>
      <SocialMediaContainer />
    </div>
  );
};

GuestLayout.propTypes = {
  children: node.isRequired
};

export default memo(GuestLayout);

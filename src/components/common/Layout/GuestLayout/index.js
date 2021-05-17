import React, { memo, useState } from 'react';
import { node } from 'prop-types';

import ContactForm from 'components/common/ContactForm';
import Menu from '../../HamburgerMenu';
import SocialMediaContainer from '../../SocialMediaContainer';
import { createQuestion } from 'state/actions/contactActions';
import { useDispatch } from 'hooks';

const GuestLayout = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const createQuestionRequest = useDispatch(createQuestion);

  const toggleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="guest-layout-container">
      <Menu handleModal={toggleModalOpen} />
      <div className="main">
        {children}
        <ContactForm
          isOpen={isModalOpen}
          handleModal={toggleModalOpen}
          onSubmit={createQuestionRequest}
        />
      </div>
      <SocialMediaContainer />
    </div>
  );
};

GuestLayout.propTypes = {
  children: node.isRequired
};

export default memo(GuestLayout);

import React, { memo } from 'react';
import { node } from 'prop-types';

import ContactModal from 'components/common/ContactModal';
import { createQuestion } from 'state/actions/contactActions';
import { useDispatch, useToggle } from 'hooks';
import Menu from '../../HamburgerMenu';
import SocialMediaContainer from '../../SocialMediaContainer';

const GuestLayout = ({ children }) => {
  const [isModalOpen, toggleModal] = useToggle();
  const createQuestionRequest = useDispatch(createQuestion);

  return (
    <div className="guest-layout-container">
      <Menu handleModal={toggleModal} />
      <div className="main">
        {children}
        <ContactModal
          isOpen={isModalOpen}
          handleModal={toggleModal}
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

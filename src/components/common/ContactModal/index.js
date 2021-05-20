import React, { useLayoutEffect } from 'react';
import ReactModal from 'react-modal';
import CloseIcon from 'assets/close.png';
import { useStatus } from 'hooks';
import { bool, func } from 'prop-types';
import { createQuestion } from 'state/actions/contactActions';
import { FULFILLED } from 'constants/actionStatusConstants';
import ContactForm from './ContactForm';

const ContactModal = ({ isOpen, handleModal, onSubmit }) => {
  const { status } = useStatus(createQuestion);

  useLayoutEffect(() => {
    if (status === FULFILLED) {
      setTimeout(handleModal, 3000);
    }
  }, [status, handleModal]);

  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={isOpen}
      contentLabel="Contact Form"
      className="contact-modal"
    >
      <button className="close-button" type="button" onClick={handleModal}>
        <img src={CloseIcon} alt="Close icon" />
      </button>
      <ContactForm onSubmit={onSubmit} />
    </ReactModal>
  );
};

ContactModal.propTypes = {
  isOpen: bool.isRequired,
  handleModal: func.isRequired,
  onSubmit: func.isRequired
};

export default ContactModal;

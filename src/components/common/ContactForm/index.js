import React from 'react';
import ReactModal from 'react-modal';
import { ReactComponent as Smilies } from 'assets/smilies.svg';
import Input from 'components/common/Input';
import { useStatus, useForm, useValidation, useTextInputProps } from 'hooks';
import { bool, func } from 'prop-types';

import { signUp as signUpValidations } from 'utils/constraints';
import { signUp } from 'state/actions/userActions';

const fields = {
  email: 'email',
  message: 'message'
};

const ContactForm = ({ isOpen, handleModal, onSubmit }) => {
  const { status, error } = useStatus(signUp);

  const validator = useValidation(signUpValidations);
  const {
    values,
    errors,
    handleValueChange,
    handleSubmit,
    handleFocus,
    handleBlur,
    activeFields,
    touched
  } = useForm(
    {
      onSubmit,
      validator,
      validateOnBlur: true
    },
    [onSubmit]
  );

  const inputProps = useTextInputProps(
    handleValueChange,
    handleFocus,
    handleBlur,
    values,
    errors,
    activeFields,
    touched
  );

  return (
    <ReactModal isOpen={isOpen} contentLabel="Example modal" className="contact-modal">
      <div className="contact-form-container">
        <button className="close-button" type="button" onClick={handleModal}>
          X
        </button>
        <Smilies className="smilies-logo" alt="Logo with faces smiling" />
        <h1>Don&apos;t be shy, drop us a line!</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div>
            <Input
              name="email"
              className="input-text large"
              label="EMAIL"
              type="email"
              {...inputProps(fields.email)}
            />
          </div>
          <div>
            <Input
              name="message"
              className="input-text textarea"
              label="MESSAGE"
              type="text"
              {...inputProps(fields.message)}
            />
          </div>
          <button type="submit" className="button">
            SEND
          </button>
        </form>
      </div>
    </ReactModal>
  );
};

ContactForm.propTypes = {
  isOpen: bool.isRequired,
  handleModal: func.isRequired
};

export default ContactForm;

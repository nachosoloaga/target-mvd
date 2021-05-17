import React, { useEffect, useState, useLayoutEffect } from 'react';
import ReactModal from 'react-modal';
import { ReactComponent as Smilies } from 'assets/smilies.svg';
import Loading from 'components/common/Loading';
import Input from 'components/common/Input';
import { useStatus, useForm, useValidation, useTextInputProps } from 'hooks';
import { bool, func } from 'prop-types';
import { createQuestion } from 'state/actions/contactActions';

import { createQuestion as createQuestionValidations } from 'utils/constraints';
import { FULFILLED, REJECTED, PENDING } from 'constants/actionStatusConstants';

const fields = {
  email: 'email',
  body: 'body'
};

const ContactForm = ({ isOpen, handleModal, onSubmit }) => {
  const { status, error } = useStatus(createQuestion);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useLayoutEffect(() => {
    if (status === FULFILLED) {
      setShowConfirmation(true);
      setTimeout(handleModal, 3000);
    }
  }, [status]);

  const validator = useValidation(createQuestionValidations);
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
    <ReactModal
      ariaHideApp={false}
      isOpen={isOpen}
      contentLabel="Example modal"
      className="contact-modal"
    >
      <div className="contact-form-container">
        <button className="close-button" type="button" onClick={handleModal}>
          X
        </button>
        <Smilies className="smilies-logo" alt="Logo with faces smiling" />
        <h1>Don&apos;t be shy, drop us a line!</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          {status === REJECTED && <strong className="error">{error}</strong>}
          {showConfirmation && <strong className="success">Message sent successfully!</strong>}
          <div>
            <Input
              name="email"
              className="input-text"
              label="EMAIL"
              type="email"
              {...inputProps(fields.email)}
            />
          </div>
          <div>
            <Input
              name="body"
              className="input-text"
              label="MESSAGE"
              type="text"
              {...inputProps(fields.body)}
            />
          </div>
          <div>
            <button className="button" type="submit">
              SEND
            </button>
          </div>
          {status === PENDING && <Loading />}
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

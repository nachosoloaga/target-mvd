import React, { useState, useLayoutEffect } from 'react';
import { ReactComponent as Smilies } from 'assets/smilies.svg';
import Loading from 'components/common/Loading';
import Input from 'components/common/Input';
import { useStatus, useForm, useValidation, useTextInputProps } from 'hooks';
import { func } from 'prop-types';
import { createQuestion } from 'state/actions/contactActions';

import { createQuestion as createQuestionValidations } from 'utils/constraints';
import { FULFILLED, REJECTED, PENDING } from 'constants/actionStatusConstants';
import { FormattedMessage } from 'react-intl';

const fields = {
  email: 'email',
  body: 'body'
};

const ContactForm = ({ onSubmit }) => {
  const { status, error } = useStatus(createQuestion);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useLayoutEffect(() => {
    if (status === FULFILLED) {
      setShowConfirmation(true);
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
    <div className="contact-form-container">
      <Smilies className="smilies-logo" alt="Logo with faces smiling" />
      <h1>
        <FormattedMessage id="contact.form.description" />
      </h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        {status === REJECTED && <strong className="error">{error}</strong>}
        {showConfirmation && (
          <strong className="success">
            <FormattedMessage id="contact.form.messageSent" />
          </strong>
        )}
        <div>
          <Input
            name="email"
            className="input-text"
            label="EMAIL"
            type="email"
            style={{ color: 'black' }}
            {...inputProps(fields.email)}
          />
        </div>
        <div>
          <Input
            name="body"
            className="input-text input-text-large"
            label="MESSAGE"
            type="text"
            {...inputProps(fields.body)}
          />
        </div>
        <div>
          <button className="button" type="submit">
            <FormattedMessage id="common.form.send" />
          </button>
        </div>
        {status === PENDING && <Loading />}
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  onSubmit: func.isRequired
};

export default ContactForm;

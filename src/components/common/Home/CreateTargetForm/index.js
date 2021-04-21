import React, { useEffect } from 'react';
import { useIntl, defineMessages, FormattedMessage } from 'react-intl';

import { REJECTED, PENDING } from 'constants/actionStatusConstants';

import Loading from 'components/common/Loading';
import Input from 'components/common/Input';
import {
  useValidation,
  useStatus,
  useTextInputProps,
  useForm,
  useNewTarget
} from '../../../../hooks';

const messages = defineMessages({
  email: { id: 'login.form.email' },
  password: { id: 'login.form.password' }
});

const fields = {
  email: 'email',
  password: 'password'
};

const CreateTargetForm = ({ onSubmit }) => {
  const target = useNewTarget();
  const intl = useIntl();
  const { status, error } = { status: 'ok', error: 'not' };
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
    <div className="form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        {status === REJECTED && <strong className="error">{error}</strong>}
        <div>
          <Input
            name="email"
            type="email"
            className="input-text"
            label={intl.formatMessage(messages.email).toUpperCase()}
            {...inputProps(fields.email)}
          />
        </div>
        <div>
          <Input
            name="password"
            type="password"
            className="input-text"
            label={intl.formatMessage(messages.password).toUpperCase()}
            {...inputProps(fields.password)}
          />
        </div>
        <button className="button" type="submit">
          <FormattedMessage id="login.title" />
        </button>
        {status === PENDING && <Loading />}
      </form>
    </div>
  );
};

export default CreateTargetForm;

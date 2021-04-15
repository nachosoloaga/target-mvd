import React, { memo } from 'react';
import { func } from 'prop-types';
import { useIntl, defineMessages, FormattedMessage } from 'react-intl';

import { useStatus, useForm, useValidation, useTextInputProps } from 'hooks';
import { REJECTED, PENDING } from 'constants/actionStatusConstants';
import { login } from 'state/actions/userActions';
import { login as loginValidations } from 'utils/constraints';

import Loading from 'components/common/Loading';
import Input from 'components/common/Input';

const messages = defineMessages({
  email: { id: 'login.form.email' },
  password: { id: 'login.form.password' }
});

const fields = {
  email: 'email',
  password: 'password'
};

export const LoginForm = ({ onSubmit }) => {
  const intl = useIntl();
  const { status, error } = useStatus(login);
  const validator = useValidation(loginValidations);
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

LoginForm.propTypes = {
  onSubmit: func.isRequired
};

export default memo(LoginForm);

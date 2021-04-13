import React, { memo } from 'react';
import { func } from 'prop-types';
import { useIntl, defineMessages, FormattedMessage } from 'react-intl';

import { REJECTED, PENDING } from 'constants/actionStatusConstants';

import Loading from 'components/common/Loading';
import Input from 'components/common/Input';
import SelectInput from 'components/common/SelectInput';
import { signUp as signUpValidations } from 'utils/constraints';
import { useStatus, useForm, useValidation, useTextInputProps } from 'hooks';
import { signUp } from 'state/actions/userActions';

import './sign-up-form.scss';

const messages = defineMessages({
  email: { id: 'login.form.email' },
  gender: { id: 'signup.form.gender' },
  username: { id: 'signup.form.username' },
  password: { id: 'login.form.password' },
  passConfirmation: { id: 'signup.form.passconfirmation' }
});

const fields = {
  username: 'username',
  email: 'email',
  gender: 'gender',
  password: 'password',
  passwordConfirmation: 'passwordConfirmation'
};

export const SignUpForm = ({ onSubmit }) => {
  const intl = useIntl();
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
    <div className="signup-form-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        {status === REJECTED && <strong>{error}</strong>}
        <div>
          <Input
            name="email"
            className="input-text"
            label={intl.formatMessage(messages.email).toUpperCase()}
            type="email"
            {...inputProps(fields.email)}
          />
        </div>
        <div>
          <Input
            name="username"
            className="input-text"
            label={intl.formatMessage(messages.username).toUpperCase()}
            type="text"
            {...inputProps(fields.username)}
          />
        </div>
        <div>
          <SelectInput
            name="gender"
            className="input-text"
            label={intl.formatMessage(messages.gender).toUpperCase()}
            {...inputProps(fields.gender)}
          />
        </div>
        <div>
          <Input
            name="password"
            className="input-text"
            label={intl.formatMessage(messages.password).toUpperCase()}
            type="password"
            {...inputProps(fields.password)}
          />
        </div>
        <div>
          <Input
            name="passwordConfirmation"
            className="input-text"
            label={intl.formatMessage(messages.passConfirmation).toUpperCase()}
            type="password"
            {...inputProps(fields.passwordConfirmation)}
          />
        </div>
        <div>
          <button className="button" type="submit">
            <FormattedMessage id="login.form.submit" />
          </button>
        </div>
        {status === PENDING && <Loading />}
      </form>
    </div>
  );
};

SignUpForm.propTypes = {
  onSubmit: func.isRequired
};

export default memo(SignUpForm);

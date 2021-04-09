import React, { memo } from 'react';
import { func } from 'prop-types';
import { useIntl, defineMessages, FormattedMessage } from 'react-intl';

import { REJECTED, PENDING } from 'constants/actionStatusConstants';
import { APP_TITLE } from 'constants/constants';

import Loading from 'components/common/Loading';
import Input from 'components/common/Input';
import { login as loginValidations } from 'utils/constraints';
import { useStatus, useForm, useValidation, useTextInputProps } from 'hooks';
import { login } from 'state/actions/userActions';

import { ReactComponent as Smilies } from 'assets/smilies.svg';
import './login-form.scss';

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
      <div className="info-text-container">
        <Smilies />
        <div className="info-text">
          <h1>{APP_TITLE.toUpperCase()}</h1>
          <div className="info-text">
            <h2>Find people near you & Connect</h2>
            <p>
              Create a target wherever on the map, specify your interest: Travel, Dating, Music, etc
              and start conecting with others who share your interest.
            </p>
          </div>
        </div>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        {status === REJECTED && <strong>{error}</strong>}
        <div>
          <Input
            name="email"
            type="email"
            className="input-text"
            label={<p className="label">{intl.formatMessage(messages.email).toUpperCase()}</p>}
            {...inputProps(fields.email)}
          />
        </div>
        <div>
          <Input
            name="password"
            type="password"
            className="input-text"
            label={<p className="label">{intl.formatMessage(messages.password).toUpperCase()}</p>}
            {...inputProps(fields.password)}
          />
        </div>
        <button className="button" type="submit">
          <FormattedMessage id="signup.title" />
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

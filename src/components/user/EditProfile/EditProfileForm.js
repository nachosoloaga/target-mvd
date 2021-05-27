import React from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { useStatus, useForm, useValidation, useTextInputProps } from 'hooks';
import Input from 'components/common/Input';
import { editProfile } from 'state/actions/userActions';
import { signUp as signUpValidations } from 'utils/constraints';
import { func, object } from 'prop-types';

const messages = {
  email: 'edit.form.email',
  currentPassword: 'edit.form.currentPassword',
  newPassword: 'edit.form.newPassword',
  confirmNewPassword: 'edit.form.confirmNewPassword'
};

const fields = {
  email: 'email',
  currentPassword: 'currentPassword',
  newPassword: 'password',
  newPasswordConfirmation: 'passwordConfirmation'
};

const EditProfileForm = ({ onSubmit, user }) => {
  const intl = useIntl();
  const { status, error } = useStatus(editProfile);

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
    <form className="edit-profile-form" onSubmit={handleSubmit}>
      <div>
        <Input
          name="email"
          className="input-text"
          label={intl.formatMessage({ id: messages.email }).toUpperCase()}
          type="email"
          placeholder={user.email}
          {...inputProps(fields.passwordConfirmation)}
        />
      </div>
      <div>
        <Input
          name="currentPassword"
          className="input-text"
          label={intl.formatMessage({ id: messages.currentPassword }).toUpperCase()}
          type="password"
          {...inputProps(fields.passwordConfirmation)}
        />
      </div>
      <div>
        <Input
          name="newPassword"
          className="input-text"
          label={intl.formatMessage({ id: messages.newPassword }).toUpperCase()}
          type="password"
          {...inputProps(fields.passwordConfirmation)}
        />
      </div>
      <div>
        <Input
          name="newPasswordConfirmation"
          className="input-text"
          label={intl.formatMessage({ id: messages.confirmNewPassword }).toUpperCase()}
          type="password"
          {...inputProps(fields.passwordConfirmation)}
        />
      </div>
      <div>
        <button className="button" type="submit">
          <FormattedMessage id="common.form.edit" />
        </button>
      </div>
    </form>
  );
};

EditProfileForm.propTypes = {
  onSubmit: func.isRequired,
  user: object.isRequired
};

export default EditProfileForm;
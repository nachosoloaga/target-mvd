import React from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { useStatus, useForm, useValidation, useTextInputProps } from 'hooks';
import Input from 'components/common/Input';
import { editProfile } from 'state/actions/userActions';
import { editProfile as editProfileValidations } from 'utils/constraints';
import { func, object } from 'prop-types';
import { FULFILLED } from 'constants/actionStatusConstants';

const messages = {
  email: 'edit.form.email',
  currentPassword: 'edit.form.currentPassword',
  newPassword: 'edit.form.newPassword',
  confirmNewPassword: 'edit.form.confirmNewPassword',
  edit: 'common.form.edit'
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

  const validator = useValidation(editProfileValidations);
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
    <form className="edit-profile-form" onSubmit={event => handleSubmit(event, user)}>
      {error && <p className="error">{error}</p>}
      {status == FULFILLED && (
        <p className="success">
          <FormattedMessage id="edit.form.success" />
        </p>
      )}
      <div>
        <Input
          name="email"
          className="input-text"
          label={intl.formatMessage({ id: messages.email }).toUpperCase()}
          type="email"
          placeholder={user.email}
          {...inputProps(fields.email)}
        />
      </div>
      <div>
        <Input
          name="currentPassword"
          className="input-text"
          label={intl.formatMessage({ id: messages.currentPassword }).toUpperCase()}
          type="password"
          {...inputProps(fields.currentPassword)}
        />
      </div>
      <div>
        <Input
          name="password"
          className="input-text"
          label={intl.formatMessage({ id: messages.newPassword }).toUpperCase()}
          type="password"
          {...inputProps(fields.newPassword)}
        />
      </div>
      <div>
        <Input
          name="passwordConfirmation"
          className="input-text"
          label={intl.formatMessage({ id: messages.confirmNewPassword }).toUpperCase()}
          type="password"
          {...inputProps(fields.newPasswordConfirmation)}
        />
      </div>
      <div>
        <button className="button" type="submit">
          {intl.formatMessage({ id: messages.edit }).toUpperCase()}
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

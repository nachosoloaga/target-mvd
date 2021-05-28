import validate from 'validate.js';

export const login = {
  email: {
    presence: { message: 'email.presence' },
    email: { message: 'email.invalid' }
  },
  password: {
    presence: { message: 'password.presence' }
  }
};

export const signUp = {
  email: {
    presence: { message: 'email.presence' },
    email: { message: 'email.invalid' }
  },
  password: {
    presence: { message: 'password.presence' }
  },
  passwordConfirmation: {
    presence: { message: 'passwordConfirmation.presence' },
    equality: {
      attribute: 'password',
      message: 'passwordConfirmation.equality'
    }
  }
};

export const createTarget = {
  title: {
    presence: { message: 'title.presence' }
  }
};

export const createQuestion = {
  email: {
    presence: { message: 'email.presence' },
    email: { message: 'email.invalid' }
  },
  body: {
    presence: { message: 'question.presence' }
  }
};

export const editProfile = {
  email(_, attributes) {
    if (
      !attributes.currentPassword &&
      !attributes.newPassword &&
      !attributes.newPasswordConfirmation
    ) {
      return {
        presence: { message: 'edit.form.presence' }
      };
    }
  },
  newPassword(_, attributes) {
    if (attributes.currentPassword) {
      return {
        presence: { message: 'password.presence' }
      };
    }
  },
  newPasswordConfirmation(_, attributes) {
    if (attributes.newPassword) {
      return {
        presence: { message: 'passwordConfirmation.presence' },
        equality: {
          attribute: 'newPassword',
          message: 'passwordConfirmation.equality'
        }
      };
    }
  }
};

validate.validators.presence.options = { allowEmpty: false };

export const validations = (constraints, props = {}) => data =>
  validate(data, constraints, props) || {};

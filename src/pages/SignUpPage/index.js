import React, { memo } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { useSession, useDispatch } from 'hooks';
import { signUp } from 'state/actions/userActions';
import SignUpForm from 'components/user/SignUpForm';
import routes from 'constants/routesPaths';

const SignUpPage = () => {
  const { authenticated } = useSession();
  const signUpRequest = useDispatch(signUp);

  if (authenticated) {
    return <Redirect to={routes.index} />;
  }

  return (
    <div className="page-container">
      <div className="sign-up-form-container">
        <h2>
          <FormattedMessage id="signup.title" />
        </h2>
        <SignUpForm onSubmit={signUpRequest} />
        <hr />
        <Link to="/login" className="link" id="sign-in-link">
          <FormattedMessage id="signup.signin" />
        </Link>
      </div>
    </div>
  );
};

export default memo(SignUpPage);

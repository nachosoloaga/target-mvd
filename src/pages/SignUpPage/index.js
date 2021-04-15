import React, { memo } from 'react';
import { Redirect } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { useSession, useDispatch } from 'hooks';
import { signUp } from 'state/actions/userActions';
import SignUpForm from 'components/user/SignUpForm';
import SocialMediaContainer from 'components/common/SocialMediaContainer';
import routes from 'constants/routesPaths';

const SignUpPage = () => {
  const { authenticated } = useSession();
  const signUpRequest = useDispatch(signUp);

  if (authenticated) {
    return <Redirect to={routes.index} />;
  }

  return (
    <div className="sign-up-page-container">
      <h2>
        <FormattedMessage id="signup.title" />
      </h2>
      <div className="sign-up-form-container">
        <SignUpForm onSubmit={signUpRequest} />
        <hr />
        <a id="sign-in-link" href="/login">
          <FormattedMessage id="signup.signin" />
        </a>
      </div>
      <SocialMediaContainer />
    </div>
  );
};

export default memo(SignUpPage);

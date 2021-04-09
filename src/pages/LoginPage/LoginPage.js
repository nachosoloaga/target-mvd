import React, { memo } from 'react';
import { Redirect } from 'react-router-dom';

import { useSession, useDispatch } from 'hooks';
import LoginForm from 'components/user/LoginForm/LoginForm';
import { login } from 'state/actions/userActions';
import routes from 'constants/routesPaths';
import SocialMediaContainer from 'components/common/SocialMediaContainer/SocialMediaContainer';

import './login-page.scss';

const LoginPage = () => {
  const { authenticated } = useSession();
  const loginRequest = useDispatch(login);

  if (authenticated) {
    return <Redirect to={routes.index} />;
  }

  return (
    <div className="login-page-container">
      <LoginForm onSubmit={loginRequest} />
      <SocialMediaContainer />
    </div>
  );
};

export default memo(LoginPage);

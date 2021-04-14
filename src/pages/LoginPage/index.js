import React, { memo } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { useSession, useDispatch } from 'hooks';
import { login } from 'state/actions/userActions';
import routes from 'constants/routesPaths';
import { APP_TITLE } from 'constants/constants';

import LoginForm from 'components/user/LoginForm';
import SocialMediaContainer from 'components/common/SocialMediaContainer';
import Menu from 'components/common/HamburgerMenu/HamburgerMenu';

import { ReactComponent as Smilies } from 'assets/smilies.svg';

const LoginPage = () => {
  const { authenticated } = useSession();
  const loginRequest = useDispatch(login);

  if (authenticated) {
    return <Redirect to={routes.index} />;
  }

  return (
    <div className="login-page-container">
      <Menu />
      <div className="info-text-container">
        <Smilies />
        <div className="info-text">
          <h1>{APP_TITLE.toUpperCase()}</h1>
          <div className="info-text">
            <h2>
              <FormattedMessage id="app.legend" />
            </h2>
            <p>
              <FormattedMessage id="app.info" />
            </p>
          </div>
        </div>
      </div>
      <LoginForm onSubmit={loginRequest} />
      <div className="links-container">
        <div className="recover-password">
          <Link to="#">
            <FormattedMessage id="login.forgot_password" />
          </Link>
        </div>
        <div className="login-links">
          <Link to="#" id="facebook-login">
            <FormattedMessage id="login.form.facebook" />
          </Link>
          <hr />
          <Link to="/sign-up" id="sign-up-link">
            <FormattedMessage id="signup.title" />
          </Link>
        </div>
      </div>
      <SocialMediaContainer />
    </div>
  );
};

export default memo(LoginPage);

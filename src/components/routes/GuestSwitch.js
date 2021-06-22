import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import routes from 'constants/routesPaths';
import About from 'components/common/About';
import GuestLayout from 'components/common/Layout/GuestLayout';
import LoginPage from '../../pages/LoginPage';
import SignUpPage from '../../pages/SignUpPage';

const GuestSwitch = () => {
  return (
    <GuestLayout>
      <Switch>
        <Route path={routes.login} component={LoginPage} />
        <Route path={routes.signUp} component={SignUpPage} />
        <Route path={routes.about} component={About} />
        <Route path="*">
          <Redirect to={routes.login} />
        </Route>
      </Switch>
    </GuestLayout>
  );
};

export default GuestSwitch;

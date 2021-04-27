import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from 'constants/routesPaths';
import LoginPage from '../../pages/LoginPage';
import SignUpPage from '../../pages/SignUpPage';

const GuestSwitch = () => {
  return (
    <Switch>
      <Route path={routes.login} component={LoginPage} />
      <Route path={routes.signUp} component={SignUpPage} />
    </Switch>
  );
};

export default GuestSwitch;

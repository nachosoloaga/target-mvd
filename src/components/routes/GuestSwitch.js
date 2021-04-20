import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from '../../pages/LoginPage';
import SignUpPage from '../../pages/SignUpPage';

const GuestSwitch = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/sign-up" component={SignUpPage} />
    </Switch>
  );
};

export default GuestSwitch;

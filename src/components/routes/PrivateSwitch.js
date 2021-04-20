import React from 'react';
import { Switch } from 'react-router-dom';
import { bool } from 'prop-types';

import PrivateRoute from './PrivateRoute';
import HomePage from '../../pages/HomePage';

const PrivateSwitch = ({ authenticated }) => {
  return (
    <Switch>
      <PrivateRoute path="/" component={HomePage} authenticated={authenticated} />
    </Switch>
  );
};

PrivateSwitch.propTypes = {
  authenticated: bool.isRequired
};

export default PrivateSwitch;

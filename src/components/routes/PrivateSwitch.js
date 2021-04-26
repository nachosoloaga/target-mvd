import React from 'react';
import { Switch } from 'react-router-dom';
import { bool } from 'prop-types';

import routes from 'constants/routesPaths';
import PrivateRoute from './PrivateRoute';
import HomePage from '../../pages/HomePage';

const PrivateSwitch = ({ authenticated }) => {
  return (
    <Switch>
      <PrivateRoute path={routes.index} component={HomePage} authenticated={authenticated} />
    </Switch>
  );
};

PrivateSwitch.propTypes = {
  authenticated: bool.isRequired
};

export default PrivateSwitch;

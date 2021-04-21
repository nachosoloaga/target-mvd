import React from 'react';
import { Switch } from 'react-router-dom';
import { bool } from 'prop-types';

import PrivateRoute from './PrivateRoute';
import HomePage from '../../pages/HomePage';
import HomeInfo from '../../pages/HomePage/HomeInfo';
import Landing from '../common/Home/Landing';

const PrivateSwitch = ({ authenticated }) => {
  return (
    <Switch>
      <HomePage>
        <PrivateRoute path="/welcome" component={HomeInfo} authenticated={authenticated} />
        <PrivateRoute path="/targets/new" component={Landing} authenticated={authenticated} />
      </HomePage>
    </Switch>
  );
};

PrivateSwitch.propTypes = {
  authenticated: bool.isRequired
};

export default PrivateSwitch;

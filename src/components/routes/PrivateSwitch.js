import React from 'react';
import { Switch } from 'react-router-dom';
import { bool } from 'prop-types';

import routes from 'constants/routesPaths';
import CreateTargetForm from 'components/common/Home/CreateTargetForm';
import PrivateRoute from './PrivateRoute';
import HomePage from '../../pages/HomePage';
import HomeInfo from '../../pages/HomePage/HomeInfo';
import Landing from '../common/Home/Landing';

const PrivateSwitch = ({ authenticated }) => {
  return (
    <Switch>
      <HomePage>
        <PrivateRoute
          exact
          path={routes.welcome}
          component={HomeInfo}
          authenticated={authenticated}
        />
        <PrivateRoute
          exact
          path={routes.targets.create}
          component={CreateTargetForm}
          authenticated={authenticated}
        />
        <PrivateRoute exact path={routes.index} component={Landing} authenticated={authenticated} />
      </HomePage>
    </Switch>
  );
};

PrivateSwitch.propTypes = {
  authenticated: bool.isRequired
};

export default PrivateSwitch;

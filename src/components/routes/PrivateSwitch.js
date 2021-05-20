import React from 'react';
import { Switch } from 'react-router-dom';
import { bool } from 'prop-types';

import routes from 'constants/routesPaths';
import PrivateRoute from './PrivateRoute';
import HomePageLayout from '../../pages/HomePageLayout';
import Home from '../common/Home';
import WelcomeMessage from '../common/Home/WelcomeMessage';
import CreateTargetForm from '../common/Home/CreateTargetForm';

const PrivateSwitch = ({ authenticated }) => {
  return (
    <Switch>
      <HomePageLayout>
        <PrivateRoute
          exact
          path={routes.welcome}
          component={WelcomeMessage}
          authenticated={authenticated}
        />
        <PrivateRoute
          exact
          path={routes.targets.create}
          component={CreateTargetForm}
          authenticated={authenticated}
        />
        <PrivateRoute exact path={routes.home} component={Home} authenticated={authenticated} />

        <PrivateRoute
          exact
          path={routes.index}
          component={WelcomeMessage}
          authenticated={authenticated}
        />
      </HomePageLayout>
    </Switch>
  );
};

PrivateSwitch.propTypes = {
  authenticated: bool.isRequired
};

export default PrivateSwitch;

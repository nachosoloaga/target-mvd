import React from 'react';
import { Switch } from 'react-router-dom';
import { bool } from 'prop-types';

import routes from 'constants/routesPaths';
import CreateTargetForm from 'components/common/Home/CreateTargetForm';
import PrivateRoute from './PrivateRoute';
import HomePageLayout from '../../pages/HomePageLayout';
import HomeInfo from '../../pages/HomePageLayout/HomeInfo';
import Landing from '../common/Home/Landing';

const PrivateSwitch = ({ authenticated }) => {
  return (
    <Switch>
      <HomePageLayout>
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
      </HomePageLayout>
    </Switch>
  );
};

PrivateSwitch.propTypes = {
  authenticated: bool.isRequired
};

export default PrivateSwitch;

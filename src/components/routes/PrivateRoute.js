import React from 'react';
import { bool, string, node } from 'prop-types';
import { Route, Redirect, useLocation } from 'react-router-dom';

import routes from 'constants/routesPaths';

const PrivateRoute = ({ component, exact = false, path, authenticated }) => {
  const location = useLocation();

  return authenticated ? (
    <Route exact={exact} path={path} component={component} />
  ) : (
    <Redirect
      to={{
        pathname: routes.login,
        state: { from: location }
      }}
    />
  );
};

PrivateRoute.propTypes = {
  component: node.isRequired,
  path: string.isRequired,
  authenticated: bool.isRequired,
  exact: bool
};

export default PrivateRoute;

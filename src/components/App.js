import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { useSession } from 'hooks';

import routes from 'constants/routesPaths';
import GuestSwitch from './routes/GuestSwitch';
import PrivateSwitch from './routes/PrivateSwitch';
import { APP_TITLE } from '../constants/constants';

const App = () => {
  const { authenticated } = useSession();

  return (
    <>
      <Helmet>
        <title>{APP_TITLE}</title>
      </Helmet>
      <BrowserRouter>
        <Switch>
          <Route path={[routes.about]}>
            {!authenticated && <GuestSwitch />}
            {authenticated && <PrivateSwitch authenticated={authenticated} />}
          </Route>

          <Route path={[routes.login, routes.signUp]}>
            <GuestSwitch />
          </Route>

          <Route path="/*">
            <PrivateSwitch authenticated={authenticated} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;

import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { useSession } from 'hooks';
import SignUpPage from 'pages/SignUpPage';
import HomePage from 'pages/HomePage';
import { APP_TITLE } from '../constants/constants';

import PrivateRoute from './routes/PrivateRoute';
import LoginPage from '../pages/LoginPage';
import GuestLayout from './common/Layout/GuestLayout';

const App = () => {
  const { authenticated } = useSession();

  return (
    <>
      <Helmet>
        <title>{APP_TITLE}</title>
      </Helmet>
      <BrowserRouter>
        <Switch>
          <GuestLayout>
            <Route path="/login" component={LoginPage} />
            <Route path="/sign-up" component={SignUpPage} />
          </GuestLayout>

          <PrivateRoute path="/" component={HomePage} authenticated={authenticated} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;

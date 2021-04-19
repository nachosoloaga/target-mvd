import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import { useSession } from 'hooks';
import { APP_TITLE } from '../constants/constants';
import GuestLayout from './common/Layout/GuestLayout';
import LoginPage from '../pages/LoginPage';

const App = () => {
  // const { authenticated } = useSession();

  return (
    <>
      <Helmet>
        <title>{APP_TITLE}</title>
      </Helmet>
      <BrowserRouter>
        <GuestLayout>
          <Switch>
            <Route path="/login" component={LoginPage} />
          </Switch>
        </GuestLayout>
      </BrowserRouter>
    </>
  );
};

export default App;

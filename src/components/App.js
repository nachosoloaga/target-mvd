import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { useSession } from 'hooks';
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
        {authenticated ? <PrivateSwitch authenticated={authenticated} /> : <GuestSwitch />}
      </BrowserRouter>
    </>
  );
};

export default App;

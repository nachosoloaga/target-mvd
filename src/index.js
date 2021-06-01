import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { setAutoFreeze } from 'immer';
import { PersistGate } from 'redux-persist/integration/react';
import { AppContainer, setConfig } from 'react-hot-loader';
import { IntlProvider } from 'react-intl';
import includes from 'lodash/includes';

import httpClient from 'httpClient';
import applyDefaultInterceptors from 'httpClient/applyDefaultInterceptors';
import storeConfig from 'state/store/configureStore';
import App from 'components/App';
import locales from 'locales';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from 'constants/constants';
import 'styles/styles.scss';
import 'leaflet/dist/leaflet.css';

require('./favicon.ico'); // Tell webpack to load favicon.ico

setAutoFreeze(false);

// Fix for browsers that don't implement Intl by default e.g.: Safari)
if (!window.Intl) {
  require.ensure(
    [
      '@formatjs/intl-relativetimeformat',
      '@formatjs/intl-relativetimeformat/dist/include-aliases.js',
      '@formatjs/intl-relativetimeformat/dist/locale-data/en.js',
      '@formatjs/intl-relativetimeformat/dist/locale-data/es.js'
    ],
    require => {
      require('@formatjs/intl-relativetimeformat/polyfill');
      require('@formatjs/intl-relativetimeformat/dist/include-aliases');
      require('@formatjs/intl-relativetimeformat/dist/locale-data/en.js');
      require('@formatjs/intl-relativetimeformat/dist/locale-data/es.js');
    }
  );
}

const usersLocale = navigator.language.split('-')[0];
const supportedUserLocale = includes(SUPPORTED_LANGUAGES, usersLocale);
const locale = supportedUserLocale ? usersLocale : DEFAULT_LANGUAGE;
const messages = locales[locale];

// Expose store when run in Cypress
if (window.Cypress) {
  window.store = storeConfig.store;
}

const renderApp = Component => {
  render(
    <IntlProvider locale={locale} messages={messages} defaultLocale="en">
      <Provider store={storeConfig.store}>
        <PersistGate loading={null} persistor={storeConfig.persistor}>
          <AppContainer>
            <Component />
          </AppContainer>
        </PersistGate>
      </Provider>
    </IntlProvider>,
    document.getElementById('app')
  );
};

applyDefaultInterceptors(storeConfig.store, httpClient);
renderApp(App);

setConfig({ logLevel: 'no-errors-please' });

if (module.hot) {
  module.hot.accept('./components/App', () => {
    renderApp(App);
  });
}

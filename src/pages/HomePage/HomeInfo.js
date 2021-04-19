import React from 'react';
import { APP_TITLE } from 'constants/constants';
import Menu from 'components/common/HamburgerMenu';
import { ReactComponent as Smilies } from 'assets/smilies.svg';
import { FormattedMessage } from 'react-intl';

const HomeInfo = () => {
  return (
    <div className="home-info-container">
      <Menu />
      <div className="home-info-text-container">
        <Smilies />
        <div className="info-text">
          <h1>{APP_TITLE.toUpperCase()}</h1>
          <div className="info-text">
            <h2>
              <FormattedMessage id="app.legend" />
            </h2>
            <p>
              <FormattedMessage id="app.info" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;

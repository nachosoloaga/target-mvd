import React from 'react';
import { APP_TITLE } from 'constants/constants';
import Menu from 'components/common/HamburgerMenu';
import { ReactComponent as Smilies } from 'assets/smilies.svg';
import { FormattedMessage } from 'react-intl';
import Point from 'assets/point.png';

const HomeInfo = () => {
  return (
    <div className="home-info-container">
      <Menu />
      <div className="home-info-text-container">
        <Smilies />
        <div className="info-text">
          <h1>{APP_TITLE.toUpperCase()}</h1>
          <div className="welcome-text">
            <h2>
              <FormattedMessage id="app.legend" />
            </h2>
            <p>
              <img style={{ marginRight: '0.5rem' }} src={Point} alt="Point" />
              <FormattedMessage id="app.welcome.item1" />
            </p>
            <p>
              <img style={{ marginRight: '0.5rem' }} src={Point} alt="Point" />
              <FormattedMessage id="app.welcome.item2" />
            </p>
          </div>
          <button type="button" className="button">
            OK; GOT IT
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;

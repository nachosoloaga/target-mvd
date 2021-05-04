import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import { APP_TITLE } from 'constants/constants';
import { ReactComponent as Smilies } from 'assets/smilies.svg';
import Point from 'assets/point.png';

const HomeInfo = () => {
  return (
    <div className="home-info-container">
      <div className="home-info-text-container">
        <Smilies />
        <div className="info-text">
          <h1>{APP_TITLE.toUpperCase()}</h1>
          <div className="welcome-text">
            <h2>
              <FormattedMessage id="app.legend" />
            </h2>
            <p>
              <img className="blue-point" src={Point} alt="Point" />
              <FormattedMessage id="app.welcome.item1" />
            </p>
            <p>
              <img className="blue-point" src={Point} alt="Point" />
              <FormattedMessage id="app.welcome.item2" />
            </p>
          </div>
          <Link className="link-button" to="/">
            <FormattedMessage id="common.understand.button" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router-dom';

import { APP_TITLE } from 'constants/constants';
import { ReactComponent as Smilies } from 'assets/smilies.svg';
import Menu from 'components/common/HamburgerMenu';
import Point from 'assets/point.png';

const HomeInfo = () => {
  const history = useHistory();

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
              <img className="blue-point" src={Point} alt="Point" />
              <FormattedMessage id="app.welcome.item1" />
            </p>
            <p>
              <img className="blue-point" src={Point} alt="Point" />
              <FormattedMessage id="app.welcome.item2" />
            </p>
          </div>
          <button type="button" className="button" onClick={() => history.push('/targets/new')}>
            <FormattedMessage id="common.understand.button" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;

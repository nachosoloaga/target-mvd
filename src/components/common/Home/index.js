import React from 'react';

import { APP_TITLE } from 'constants/constants';
import ProfileContainer from 'assets/profile-container.png';
import Profile from 'assets/profile-icon.png';
import { useSession } from 'hooks';
import LogoutButton from 'components/user/LogoutButton';
import { shallowEqual, useSelector } from 'react-redux';

const Home = () => {
  const { user } = useSession();
  const targets = useSelector(state => state.targetReducer.targets, shallowEqual);

  return (
    <div className="home-info-container">
      <div className="home-info-text-container">
        <h3>{APP_TITLE.toUpperCase()}</h3>
        <div className="profile-container">
          <img className="profile-icon-bg" src={ProfileContainer} alt="Profile Container" />
          <img className="profile-icon" src={Profile} alt="Profile Icon" />
          <p className="username">{user.email}</p>
          <div className="actions">
            <a>Editar</a>
            <LogoutButton />
          </div>
        </div>
        <hr />
        <div className="info-text">
          {!targets.length && <h4>Crea tu primer objetivo haciendo click en el mapa</h4>}
        </div>
      </div>
    </div>
  );
};

export default Home;

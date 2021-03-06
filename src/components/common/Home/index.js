import React from 'react';

import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { APP_TITLE } from 'constants/constants';
import ProfileContainer from 'assets/profile-container.png';
import Profile from 'assets/profile-icon.png';
import { useSession, useStatus } from 'hooks';
import LogoutButton from 'components/user/LogoutButton';
import { shallowEqual, useSelector } from 'react-redux';
import { getTargets, getMatches } from 'state/actions/targetActions';
import { FULFILLED, PENDING } from 'constants/actionStatusConstants';
import Smilies from 'assets/smilies.png';
import routes from 'constants/routesPaths';
import Loading from '../Loading';
import EmptyFeed from './EmptyFeed';
import ChatList from './ChatList';

const Home = () => {
  const { user } = useSession();
  const targets = useSelector(state => state.targetReducer.targets, shallowEqual);
  const matches = useSelector(state => state.targetReducer.matches);
  const { status: targetsStatus } = useStatus(getTargets);
  const { status: matchesStatus } = useStatus(getMatches);

  return (
    <div className="home-info-container">
      <div className="home-info-text-container">
        <h3>{APP_TITLE.toUpperCase()}</h3>
        <div className="profile-container">
          <div className="profile-icon-container">
            <img className="profile-icon-bg" src={ProfileContainer} alt="Profile Container" />
            <img className="profile-icon" src={Profile} alt="Profile Icon" />
          </div>
          <p className="username">{user.email}</p>
          <div className="actions">
            <Link className="link" to={routes.editProfile}>
              <FormattedMessage id="common.form.edit" />
            </Link>
            <LogoutButton />
          </div>
        </div>
        <hr />
        {(targetsStatus == PENDING || matchesStatus == PENDING) && <Loading />}
        {targetsStatus == FULFILLED && matchesStatus == FULFILLED && (
          <div className="info-text">
            {targets.length == 0 && <EmptyFeed />}
            {targets.length !== 0 && matches.length == 0 && (
              <h4>
                <FormattedMessage id="feed.noMatchesFound" />
              </h4>
            )}
            {matches.length !== 0 && <ChatList matches={matches} />}
          </div>
        )}
      </div>
      <img src={Smilies} alt="Smilies logo" className="smilies-bottom" />
    </div>
  );
};

export default Home;

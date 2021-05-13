import React from 'react';
import { FormattedMessage } from 'react-intl';
import Smilies from 'assets/smilies.png';
import { arrayOf, object } from 'prop-types';
import MessagePreview from './MessagePreview';

const ChatList = ({ matches }) => {
  return (
    <div className="chat-list-container">
      <h4 className="header">Chat</h4>
      <div className="chat-list-entries-container">
        <div className="chat-list-entries">
          <hr className="divider" />
          {matches.map(match => (
            <div key={match.matchId}>
              <MessagePreview match={match} />
              <hr className="divider" />
            </div>
          ))}
        </div>
        {matches.length > 3 && (
          <p className="scroll-message">
            <FormattedMessage id="feed.scrollMessage" />
          </p>
        )}
      </div>
      <img src={Smilies} alt="Smilies logo" className="smilies-bottom" />
    </div>
  );
};

ChatList.propTypes = {
  matches: arrayOf(object).isRequired
};

export default ChatList;

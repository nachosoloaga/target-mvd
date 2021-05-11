import React from 'react';
import Smilies from 'assets/smilies.png';
import { arrayOf, object } from 'prop-types';
import MessagePreview from './MessagePreview';

const ChatList = ({ matches }) => {
  return (
    <div className="chat-list-container">
      <h4 className="header">Chat</h4>
      <div className="chat-list-entries">
        {matches.map(match => (
          <div key={match.id}>
            <MessagePreview match={match} />
            <hr className="divider" />
          </div>
        ))}
      </div>
      <img src={Smilies} alt="Smilies logo" className="smilies-bottom" />
    </div>
  );
};

ChatList.propTypes = {
  matches: arrayOf(object).isRequired
};

export default ChatList;

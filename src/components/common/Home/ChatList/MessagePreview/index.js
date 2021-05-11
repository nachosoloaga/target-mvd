import React from 'react';
import ProfileIcon from 'assets/profile-icon.png';
import { object } from 'prop-types';

const MessagePreview = ({ match }) => {
  return (
    <div className="message-preview">
      <div className="profile-picture">
        <img
          style={{ height: '35px' }}
          src={match.user.avatar.smallThumbUrl || ProfileIcon}
          alt="Profile Icon"
        />
      </div>
      <div className="message-container">
        <div className="username">{match.user.fullName}</div>
        <div className="message">{match.lastMessage || 'No messages yet'}</div>
      </div>
      <div className="message-topic">
        <img src={match.topicIcon} alt="Topic Icon" />
      </div>
    </div>
  );
};

MessagePreview.propTypes = {
  match: object.isRequired
};

export default MessagePreview;

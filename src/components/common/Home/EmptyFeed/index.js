import React from 'react';
import { FormattedMessage } from 'react-intl';

const EmptyFeed = () => {
  return (
    <div className="empty-feed-container">
      <h4>
        <FormattedMessage id="feed.createFirstTarget" />
      </h4>
      <div className="empty-feed-info">
        <h5>
          <FormattedMessage id="feed.popularCategories" />
        </h5>
        <ul className="topics-list">
          <li>
            <span role="img" aria-label="futbol">
              ⚽️
            </span>
            Fútbol
          </li>
          <li>
            <span role="img" aria-label="travel">
              🌎
            </span>
            Viajes
          </li>
          <li>
            <span role="img" aria-label="musica">
              🎵
            </span>
            Música
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EmptyFeed;

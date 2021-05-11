import React from 'react';
import Smilies from 'assets/smilies.png';

const EmptyFeed = () => {
  return (
    <div className="empty-feed-container">
      <h4>Crea tu primer objetivo haciendo click en el mapa</h4>
      <div className="empty-feed-info">
        <h5>Psss! Las categorías más populares son estas:</h5>
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
      <img src={Smilies} alt="Smilies logo" className="smilies-bottom" />
    </div>
  );
};

export default EmptyFeed;

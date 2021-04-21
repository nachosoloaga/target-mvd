import React, { useEffect, useState } from 'react';

import Map from 'components/common/Map';

const HomePage = ({ children }) => {
  const [position, setPosition] = useState({ x: 51, y: -1 });

  useEffect(() => {
    if (position.x === 51 && position.y === -1) {
      navigator.geolocation.getCurrentPosition(pos =>
        setPosition({ x: pos.coords.latitude, y: pos.coords.longitude })
      );
    }
  }, [position]);

  return (
    <div className="home-container">
      {children}
      <Map position={position} />
    </div>
  );
};

export default HomePage;

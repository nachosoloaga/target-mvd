import React, { useEffect, useState } from 'react';
import { node } from 'prop-types';

import Map from 'components/common/Map';
import Menu from 'components/common/HamburgerMenu';

const HomePageLayout = ({ children }) => {
  const [position, setPosition] = useState({ x: 51, y: -1 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos =>
      setPosition({ x: pos.coords.latitude, y: pos.coords.longitude })
    );
  }, []);

  return (
    <div className="home-container">
      <Menu />
      {children}
      <Map position={position} />
    </div>
  );
};

HomePageLayout.propTypes = {
  children: node.isRequired
};

export default HomePageLayout;

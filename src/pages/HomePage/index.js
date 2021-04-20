import React, { memo } from 'react';
import Map from 'components/common/Map';
import HomeInfo from './HomeInfo';

const HomePage = () => {
  return (
    <div className="home-container">
      <HomeInfo />
      <Map />
    </div>
  );
};

export default memo(HomePage);

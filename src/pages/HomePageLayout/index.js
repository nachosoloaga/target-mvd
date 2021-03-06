import React, { useEffect, useState } from 'react';
import Map from 'components/common/Map';
import Menu from 'components/common/HamburgerMenu';
import {
  getMatches as getMatchesAction,
  getTargets as getTargetsAction,
  getTargetTopics
} from 'state/actions/targetActions';
import useDispatch from 'hooks/useDispatch';
import { node } from 'prop-types';

const HomePageLayout = ({ children }) => {
  const [position, setPosition] = useState({ x: 51, y: -1 });
  const getMatches = useDispatch(getMatchesAction);
  const getTopics = useDispatch(getTargetTopics);
  const getTargets = useDispatch(getTargetsAction);

  useEffect(() => {
    getTopics();
    getTargets();
    getMatches();
  }, [getTopics, getTargets, getMatches]);

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

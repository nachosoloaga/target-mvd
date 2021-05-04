import L from 'leaflet';

const iconUrlByTopicId = {
  2: 'https://target-mvd.s3.amazonaws.com/topic/icon/2/ba73d061-ddbf-4863-8edf-f93c621a6e19.jpg',
  11: 'https://target-mvd.s3.amazonaws.com/topic/icon/11/6cacfa25-f06b-45e5-99d9-390dcb8c8797.jpg',
  12: 'https://target-mvd.s3.amazonaws.com/topic/icon/12/0a6e8b6e-a397-4612-b6f3-39735123c85a.jpg',
  13: 'https://target-mvd.s3.amazonaws.com/topic/icon/13/6d81b324-b73a-4dc7-b841-c61ba00e035a.jpg',
  14: 'https://target-mvd.s3.amazonaws.com/topic/icon/14/89b42cc1-ba06-4fff-b657-d0fcbcf4b799.jpg',
  15: 'https://target-mvd.s3.amazonaws.com/topic/icon/15/c1bfe7d0-855a-4d7d-be89-8a339340734f.jpg',
  16: 'https://target-mvd.s3.amazonaws.com/topic/icon/16/fc340e5d-5569-443e-9e71-8696a879d6d0.jpg',
  17: 'https://target-mvd.s3.amazonaws.com/topic/icon/17/dfb2b82b-f1d9-4bdb-90a0-5eef254e25d7.jpg',
  18: 'https://target-mvd.s3.amazonaws.com/topic/icon/18/0b8595c7-5fcb-4dde-a01b-525c9746a7d7.jpg',
  19: 'https://target-mvd.s3.amazonaws.com/topic/icon/19/a3a2a60e-a724-4ff5-b07f-125b8797e5fb.jpg'
};

const defaultIconUrl =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/1200px-Map_marker.svg.png';

const getTopicIcon = topicId => {
  let sizeX;
  let sizeY;
  const iconUrl = iconUrlByTopicId[topicId] || defaultIconUrl;

  iconUrl === defaultIconUrl ? ([sizeX, sizeY] = [30, 50]) : ([sizeX, sizeY] = [50, 70]);

  return new L.Icon({
    iconUrl,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(sizeX, sizeY),
    className: 'leaflet-div-icon'
  });
};

export default getTopicIcon;

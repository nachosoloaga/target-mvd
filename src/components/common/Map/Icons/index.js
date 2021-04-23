import L from 'leaflet';

const icon = new L.Icon({
  iconUrl:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/512px-Map_marker.svg.png',
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(30, 40),
  className: 'leaflet-div-icon'
});

export { icon };

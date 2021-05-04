import { useHistory } from 'react-router-dom';
import { useMapEvents } from 'react-leaflet';
import { useNewTarget } from 'hooks';

const NewTarget = () => {
  const history = useHistory();
  const { updateTargetCoords } = useNewTarget();

  useMapEvents({
    click(e) {
      const coordinates = [e.latlng.lat, e.latlng.lng];
      updateTargetCoords(coordinates);
      if (history.location.pathname != '/targets/new') {
        history.push('/targets/new');
      }
    }
  });

  return null;
};

export default NewTarget;

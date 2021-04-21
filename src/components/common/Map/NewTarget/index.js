import { useHistory } from 'react-router-dom';
import { useMapEvents } from 'react-leaflet';
import { updateNewTargetCoords } from '../../../../state/actions/targetActions';
import useDispatch from '../../../../hooks/useDispatch';

const NewTarget = () => {
  const history = useHistory();
  const updateCoordinates = useDispatch(updateNewTargetCoords);

  useMapEvents({
    click(e) {
      const coordinates = [e.latlng.lat, e.latlng.lng];
      updateCoordinates(coordinates);
      history.push('/targets/new');
    }
  });

  return null;
};

export default NewTarget;

import { useHistory } from 'react-router-dom';
import { useMapEvents } from 'react-leaflet';
import { setNewTargetCoords } from '../../../../state/actions/targetActions';
import useDispatch from '../../../../hooks/useDispatch';

const NewTarget = ({ setNewMarker }) => {
  const history = useHistory();
  const updateCoordinates = useDispatch(setNewTargetCoords);

  useMapEvents({
    click(e) {
      const coordinates = [e.latlng.lat, e.latlng.lng];
      setNewMarker(coordinates);
      updateCoordinates(coordinates);
      history.push('/'); // forces re-render of create target form, to set new coords on each click on the map
      history.push('/targets/new');
    }
  });

  return null;
};

export default NewTarget;

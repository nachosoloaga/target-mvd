import { useHistory } from 'react-router-dom';
import { useMapEvents } from 'react-leaflet';
import { useNewTarget } from 'hooks';
import { useSelector } from 'react-redux';
import { useIntl } from 'react-intl';

const NewTarget = () => {
  const history = useHistory();
  const intl = useIntl();
  const { updateTargetCoords } = useNewTarget();
  const targetsLength = useSelector(state => state.targetReducer.targets.length);

  useMapEvents({
    click(e) {
      if (targetsLength <= 10) {
        const coordinates = [e.latlng.lat, e.latlng.lng];
        updateTargetCoords(coordinates);
        if (history.location.pathname != '/targets/new') {
          history.push('/targets/new');
        }
      } else {
        window.alert(intl.formatMessage({ id: 'target.new.restriction' }));
      }
    }
  });

  return null;
};

export default NewTarget;

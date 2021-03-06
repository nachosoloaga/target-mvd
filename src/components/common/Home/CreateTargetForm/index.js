import React, { useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { REJECTED, PENDING } from 'constants/actionStatusConstants';

import Loading from 'components/common/Loading';
import Input from 'components/common/Input';
import SelectInput from 'components/common/SelectInput';
import Target from 'assets/target.png';
import { createTarget } from 'state/actions/targetActions';
import { createTarget as createTargetValidations } from 'utils/constraints';
import { FormattedMessage } from 'react-intl';
import routes from 'constants/routesPaths';
import {
  useValidation,
  useStatus,
  useTextInputProps,
  useForm,
  useDispatch,
  useNewTarget
} from '../../../../hooks';

const fields = {
  title: 'title',
  lat: 'lat',
  lng: 'lng',
  radius: 'radius',
  topic_id: 'topic_id'
};

const CreateTargetForm = () => {
  const validator = useValidation(createTargetValidations);
  const { status, error } = useStatus(createTarget);
  const createTargetRequest = useDispatch(createTarget);
  const topics = useSelector(state => state.targetReducer.topics, shallowEqual);
  const history = useHistory();
  const { newTarget } = useNewTarget();

  const initialValues = {
    title: '',
    lat: '',
    lng: '',
    topic_id: '',
    radius: ''
  };

  const {
    values,
    errors,
    submitted,
    handleValueChange,
    handleSubmit,
    handleFocus,
    handleBlur,
    activeFields,
    touched
  } = useForm(
    {
      initialValues,
      onSubmit: createTargetRequest,
      validator,
      validateOnBlur: true
    },
    [createTargetRequest]
  );

  const inputProps = useTextInputProps(
    handleValueChange,
    handleFocus,
    handleBlur,
    values,
    errors,
    activeFields,
    touched
  );

  useEffect(() => {
    /* This mess of conditions is needed to keep the form state up-to-date with redux values. First part of the condition covers the case where lat field is empty in the form
    (usually because of page refresh), but Redux has a value for it. Second part of the condition covers the case where lat field is already defined in the form, but the user
    clicked on another part of the map, so the form must be updated with the new value obtained from Redux */
    if (
      (!values.lat && newTarget.coords.length != 0) ||
      (values.lat && values.lat != newTarget.coords[0])
    ) {
      handleValueChange('lat', newTarget.coords[0]);
    }

    if (
      (!values.lng && newTarget.coords.length != 0) ||
      (values.lng && values.lng != newTarget.coords[1])
    ) {
      handleValueChange('lng', newTarget.coords[1]);
    }
  });

  if (submitted) {
    history.push(routes.home);
  }

  return (
    <div className="form-container new-target-container">
      <form onSubmit={handleSubmit}>
        <div className="new-target">
          <img src={Target} alt="Target" />
          <h5>
            <FormattedMessage id="target.create" />
          </h5>
        </div>
        {status === REJECTED && <strong className="error">{error}</strong>}
        <div>
          <Input
            name="title"
            type="text"
            className="input-text"
            label={<FormattedMessage id="target.form.title" />}
            {...inputProps(fields.title)}
          />
        </div>
        <div>
          <Input
            name="lat"
            type="number"
            className="input-text"
            label={<FormattedMessage id="target.form.lat" />}
            {...inputProps(fields.lat)}
          />
        </div>
        <div>
          <Input
            name="lng"
            type="number"
            className="input-text"
            label={<FormattedMessage id="target.form.lng" />}
            {...inputProps(fields.lng)}
          />
        </div>
        <div>
          <Input
            name="radius"
            type="number"
            className="input-text"
            label={<FormattedMessage id="target.form.radius" />}
            {...inputProps(fields.radius)}
          />
        </div>
        <div>
          <SelectInput
            name="topic_id"
            className="input-text"
            label={<FormattedMessage id="target.form.topic" />}
            options={topics}
            {...inputProps(fields.topic_id)}
          />
        </div>
        <button className="button new-target-button" type="submit">
          {<FormattedMessage id="common.form.create" />}
        </button>
        {status === PENDING && <Loading />}
      </form>
      <Link className="link" to={routes.home}>
        <FormattedMessage id="common.back" />
      </Link>
    </div>
  );
};

export default CreateTargetForm;

import React, { useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { REJECTED, PENDING } from 'constants/actionStatusConstants';

import Loading from 'components/common/Loading';
import Input from 'components/common/Input';
import SelectInput from 'components/common/SelectInput';
import Target from 'assets/target.png';
import { createTarget, getTargetTopics } from 'state/actions/targetActions';
import { createTarget as createTargetValidations } from 'utils/constraints';
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
  const getTopicsRequest = useDispatch(getTargetTopics);
  const topics = useSelector(state => state.targetReducer.topics, shallowEqual);
  const newTarget = useNewTarget();

  useEffect(() => {
    getTopicsRequest();
  }, [getTopicsRequest]);

  const initialValues = {
    title: '',
    lat: newTarget.coords[0],
    lng: newTarget.coords[1],
    topic_id: '',
    radius: ''
  };

  const {
    values,
    errors,
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

  return (
    <div className="form-container new-target">
      <form onSubmit={handleSubmit}>
        <div className="new-target">
          <img src={Target} alt="Target" />
          <h5>CREATE NEW TARGET</h5>
        </div>
        {status === REJECTED && <strong className="error">{error}</strong>}
        <div>
          <Input
            name="title"
            type="text"
            className="input-text"
            label="Titulo"
            {...inputProps(fields.title)}
          />
        </div>
        <div>
          <Input
            name="lat"
            type="number"
            className="input-text"
            label="Latitud"
            {...inputProps(fields.lat)}
          />
        </div>
        <div>
          <Input
            name="lng"
            type="number"
            className="input-text"
            label="Longitud"
            {...inputProps(fields.lng)}
          />
        </div>
        <div>
          <Input
            name="radius"
            type="number"
            className="input-text"
            label="Radio"
            {...inputProps(fields.radius)}
          />
        </div>
        <div>
          <SelectInput
            name="topic_id"
            className="input-text"
            label="TOPIC"
            options={topics}
            {...inputProps(fields.topic_id)}
          />
        </div>
        <button className="button new-target-button" type="submit">
          Crear
        </button>
        {status === PENDING && <Loading />}
      </form>
    </div>
  );
};

export default CreateTargetForm;

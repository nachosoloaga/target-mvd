import React, { useEffect, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { REJECTED, PENDING } from 'constants/actionStatusConstants';

import Loading from 'components/common/Loading';
import Input from 'components/common/Input';
import SelectInput from 'components/common/SelectInput';
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
  }, []);

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

  // Set default value to lat and lng inputs
  const latInputProps = inputProps(fields.lat);
  const lngInputProps = inputProps(fields.lng);
  [latInputProps.value, lngInputProps.value] = [...newTarget.coords];

  return (
    <div className="new-target form-container">
      <form className="login-form" onSubmit={handleSubmit}>
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
        <div style={{ display: 'none' }}>
          <Input name="lat" type="text" className="input-text" label="Latitud" {...latInputProps} />
        </div>
        <div style={{ display: 'none' }}>
          <Input
            name="lng"
            type="text"
            className="input-text"
            label="Longitud"
            {...lngInputProps}
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
        <button className="button" type="submit">
          Crear
        </button>
        {status === PENDING && <Loading />}
      </form>
    </div>
  );
};

export default CreateTargetForm;

import React from 'react';
import { object } from 'prop-types';

const Option = ({ option }) => {
  return <option value={option.id}>{option.label}</option>;
};

Option.propTypes = {
  option: object.isRequired
};

export default Option;

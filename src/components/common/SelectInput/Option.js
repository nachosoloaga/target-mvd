import React from 'react';
import { useIntl } from 'react-intl';
import { object } from 'prop-types';

const Option = ({ option }) => {
  const intl = useIntl();

  return (
    <option key={option.id} value={option.value}>
      {intl.formatMessage({ id: option.id })}
    </option>
  );
};

Option.propTypes = {
  option: object.isRequired
};

export default Option;

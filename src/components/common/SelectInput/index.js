import React, { useEffect } from 'react';
import { arrayOf, bool, func, object, oneOfType, string } from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';

import { parseInputErrors } from 'utils/helpers';
import Option from './Option';

import '../../../styles/_variables.scss';

const SelectInput = ({
  label,
  name,
  value,
  onChange,
  errors,
  active,
  touched,
  options,
  ...props
}) => {
  // Register field in the form
  useEffect(() => {
    onChange({ target: { value } }, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const intl = useIntl();

  return (
    <div>
      <div className="input-container">
        {label && (
          <label className="input-label" htmlFor={name}>
            {label}
          </label>
        )}
        <select name={name} value={value} onChange={onChange} {...props}>
          <option value="" disabled>
            {intl.formatMessage({ id: 'common.form.select' })}
          </option>
          {options.map(opt => {
            return <Option key={opt.id} option={opt} />;
          })}
        </select>
        {touched && errors && (
          <span className="input-error-message">
            <FormattedMessage
              id={parseInputErrors(errors)}
              defaultMessage={parseInputErrors(errors)}
            />
          </span>
        )}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: string.isRequired,
  label: oneOfType([string, object]),
  value: string,
  options: arrayOf(Object),
  onChange: func.isRequired,
  errors: arrayOf(string),
  active: bool.isRequired,
  touched: bool.isRequired
};

export default SelectInput;

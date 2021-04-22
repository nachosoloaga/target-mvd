import React, { useEffect } from 'react';
import { arrayOf, bool, func, string } from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { parseInputErrors } from 'utils/helpers';

const Input = ({
  label,
  name,
  defaultValue,
  value,
  onChange,
  errors,
  active,
  touched,
  ...props
}) => {
  // Register field in the form
  useEffect(() => {
    onChange({ target: { value } }, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="input-container">
        {label && (
          <label className="input-label" htmlFor={name}>
            {label}
          </label>
        )}
        <input name={name} value={value || defaultValue} onChange={onChange} {...props} />
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

Input.propTypes = {
  name: string.isRequired,
  label: string,
  value: string,
  onChange: func.isRequired,
  errors: arrayOf(string),
  active: bool.isRequired,
  touched: bool.isRequired
};

export default Input;

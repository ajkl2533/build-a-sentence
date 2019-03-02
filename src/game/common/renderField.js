import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { and } from 'ramda';
import { isTrue, isNotUndefined } from 'ramda-adjunct';

const renderField = ({ input, label, meta: { touched, error } }) => {
  const hasError = and(isTrue(touched), isNotUndefined(error));

  return (
    <div className="field">
      <label className="label title" htmlFor="field">
        {label}
      </label>
      <div className="control has-icons-right">
        <input
          {...input}
          id="field"
          className={classNames('input is-large', {
            'is-danger': hasError,
          })}
          type="text"
        />
        {hasError && (
          <span className="icon is-small is-right has-text-danger">
            <i className="fas fa-exclamation-triangle" />
          </span>
        )}
      </div>
      {hasError && <p className="help is-danger">{error}</p>}
    </div>
  );
};

renderField.propTypes = {
  input: PropTypes.shape().isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape().isRequired,
};

export default renderField;

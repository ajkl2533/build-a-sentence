import React from 'react';
import PropTypes from 'prop-types';

const renderField = ({ input, label, meta: { touched, error } }) => (
  <div>
    <label htmlFor="field">{label}</label>
    <div>
      <input {...input} id="field" placeholder={label} type="text" />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

renderField.propTypes = {
  input: PropTypes.shape().isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape().isRequired,
};

export default renderField;

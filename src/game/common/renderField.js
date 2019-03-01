import React from 'react';

const renderField = ({ input, label, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type="text" />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export default renderField;

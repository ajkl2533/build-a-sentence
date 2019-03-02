import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ resultSentence }) => (
  <section>
    <div className="subtitle">Your sentence:</div>
    <div className="title">{resultSentence}</div>
  </section>
);

Result.propTypes = {
  resultSentence: PropTypes.string.isRequired,
};

export default Result;

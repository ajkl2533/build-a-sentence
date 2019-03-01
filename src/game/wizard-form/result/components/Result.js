import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ resultSentence }) => <section>{resultSentence}</section>;

Result.propTypes = {
  resultSentence: PropTypes.string.isRequired,
};

export default Result;

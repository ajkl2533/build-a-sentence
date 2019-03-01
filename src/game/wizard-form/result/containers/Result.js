import { connect } from 'react-redux';

import Result from '../components/Result';
import { resultSentenceSelector } from '../../selectors';

const mapStateToProps = (state, props) => ({
  resultSentence: resultSentenceSelector(state, props),
});

export default connect(mapStateToProps)(Result);

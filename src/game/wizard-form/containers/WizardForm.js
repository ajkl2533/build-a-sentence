import { connect } from 'react-redux';

import WizardForm from '../components/WizardForm';
import {
  isFirstPageSelector,
  isSecondPageSelector,
  isThirdPageSelector,
  isFourthPageSelector,
  isResultPageSelector,
} from '../selectors';

const mapStateToProps = (state, props) => ({
  isFirstPage: isFirstPageSelector(state, props),
  isSecondPage: isSecondPageSelector(state, props),
  isThirdPage: isThirdPageSelector(state, props),
  isFourthPage: isFourthPageSelector(state, props),
  isResultPage: isResultPageSelector(state, props),
});

export default connect(mapStateToProps)(WizardForm);

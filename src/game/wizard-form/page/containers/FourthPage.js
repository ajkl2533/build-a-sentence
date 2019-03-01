import { connect } from 'react-redux';

import Page from '../components/Page';
import {
  fourthPageIdSelector,
  fourthPageLabelSelector,
  fourthPageHasPrevPageSelector,
} from '../selectors';
import { goToNextPage, goToPrevPage } from '../actions';

const mapStateToProps = (state, props) => ({
  id: fourthPageIdSelector(state, props),
  label: fourthPageLabelSelector(state, props),
  hasPrevPage: fourthPageHasPrevPageSelector(state, props),
});

const mapDispatchToProps = dispatch => ({
  onPrevClick: () => dispatch(goToPrevPage()),
  onNextClick: () => dispatch(goToNextPage()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);

import { connect } from 'react-redux';

import Page from '../components/Page';
import {
  thirdPageIdSelector,
  thirdPageLabelSelector,
  thirdPageHasPrevPageSelector,
} from '../selectors';
import { goToNextPage, goToPrevPage } from '../actions';

const mapStateToProps = (state, props) => ({
  id: thirdPageIdSelector(state, props),
  label: thirdPageLabelSelector(state, props),
  hasPrevPage: thirdPageHasPrevPageSelector(state, props),
});

const mapDispatchToProps = dispatch => ({
  onPrevClick: () => dispatch(goToPrevPage()),
  onNextClick: () => dispatch(goToNextPage()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);

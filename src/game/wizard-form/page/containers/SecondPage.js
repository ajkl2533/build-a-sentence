import { connect } from 'react-redux';

import Page from '../components/Page';
import {
  secondPageIdSelector,
  secondPageLabelSelector,
  secondPageHasPrevPageSelector,
} from '../selectors';
import { pageSelector } from '../../selectors';
import { goToNextPage, goToPrevPage } from '../actions';

const mapStateToProps = (state, props) => ({
  page: pageSelector(state, props),
  id: secondPageIdSelector(state, props),
  label: secondPageLabelSelector(state, props),
  hasPrevPage: secondPageHasPrevPageSelector(state, props),
});

const mapDispatchToProps = dispatch => ({
  onPrevClick: () => dispatch(goToPrevPage()),
  onNextClick: () => dispatch(goToNextPage()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);

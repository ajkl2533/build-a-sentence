import { connect } from 'react-redux';

import Page from '../components/Page';
import { firstPageIdSelector, firstPageLabelSelector, firstPageHasPrevPageSelector } from '../selectors';
import { goToNextPage } from '../actions';


const mapStateToProps = (state, props) => ({
  id: firstPageIdSelector(state, props),
  label: firstPageLabelSelector(state, props),
  hasPrevPage: firstPageHasPrevPageSelector(state, props),
});

const mapDispatchToProps = dispatch => ({
  onNextClick: () => dispatch(goToNextPage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);

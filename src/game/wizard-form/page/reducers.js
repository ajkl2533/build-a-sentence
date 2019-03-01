import { handleActions } from 'redux-actions';
import { inc, dec } from 'ramda';

import { goToPrevPage, goToNextPage } from './actions';

const initialState = {
  page: 1,
};

export default handleActions(
  {
    [goToPrevPage]: state => ({ ...state, page: dec(state.page) }),
    [goToNextPage]: state => ({ ...state, page: inc(state.page) }),
  },
  initialState,
);

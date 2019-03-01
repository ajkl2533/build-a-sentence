import { combineReducers } from 'redux';

import pageReducer from './wizard-form/page/reducers';


export default combineReducers({
  router: pageReducer,
});

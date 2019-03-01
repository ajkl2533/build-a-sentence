import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';

import './styles/main.scss';
import WizardForm from './game/wizard-form/containers/WizardForm';
import gameReducer from './game/reducers';


const store = createStore(combineReducers({
    game: gameReducer,
    form: formReducer,
  }),
  typeof window !== 'undefined' 
    && window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

ReactDOM.render(
  <Provider store={store}>
    <WizardForm />
  </Provider>, 
  document.getElementById('root')
);

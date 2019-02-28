import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import './styles/main.scss';
import App from './App';
import gameReducer from './game/reducers';


const store = createStore(combineReducers({
    game: gameReducer,
  }),
  typeof window !== 'undefined' 
    && window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

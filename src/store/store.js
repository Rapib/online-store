import { createStore } from 'redux';
import rootReducer from './combineReducers';

function store() {
  return createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

export default store;







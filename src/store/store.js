import { createStore, applyMiddleware } from 'redux';
import rootReducer from './combineReducers';
import thunk from 'redux-thunk'

function store() {
  return createStore(rootReducer, applyMiddleware(thunk));
}

export default store;







import { combineReducers } from 'redux';

import productReducer from './products';
import categoryReducer from './categories';

const rootReducer = combineReducers({ productReducer, categoryReducer });

export default rootReducer;

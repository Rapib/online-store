import { combineReducers } from 'redux';

import productReducer from './products';
import categoryReducer from './categories';
import cartReducer from './cart';

const rootReducer = combineReducers({ productReducer, categoryReducer, cartReducer });

export default rootReducer;

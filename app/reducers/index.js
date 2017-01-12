import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import headerReducer from './headerReducer';

export default combineReducers({
  headerReducer,
  routing
});

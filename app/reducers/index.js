// @flow
import { combineReducers } from 'redux';		
import { routerReducer as routing } from 'react-router-redux';		
import collectionState from './collectionState';		
		
const rootReducer = combineReducers({		
  collectionState,		
  routing		
});		
		
export default rootReducer;
// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import collectionState from './collectionState';
import themeState from './themeState';
import navPaneState from './navPaneState';

const rootReducer = combineReducers({
  collectionState,
  themeState,
  navPaneState,
  routing
});

export default rootReducer;
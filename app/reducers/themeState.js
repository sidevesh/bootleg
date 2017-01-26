// @flow
import * as types from '../constants/actionTypes';

const initialState = {
  accentColor: '#cc7f29',
  theme: 'light',
  windowWidth: -1,
  windowHeight: -1,
  navPaneOpen: true
};

export default function themeState(state = initialState, action = {}) {
  switch (action.type) {
    case types.WINDOW_RESIZE:
      return {
        ...state,
        windowWidth: action.width,
        windowHeight: action.height,
      };
    case types.NAV_PANE_TOGGLE:
      return {
        ...state,
        navPaneOpen: !state.navPaneOpen
      };
    default:
      return state;
  }
}
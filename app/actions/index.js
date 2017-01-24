import * as types from '../constants/actionTypes';

export const callPaneSelect = (name) => ({
  type: types.PANE_SELECTED,
  name: name
})
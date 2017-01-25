import * as types from '../constants/actionTypes';

export const callPaneSelect = (name) => ({
  type: types.PANE_SELECTED,
  name: name
})

export const callGameSelect = (index) => ({
  type: types.GAME_SELECTED,
  index: index
})

export const callGameAdd = (name, desc, image, color) => ({
  type: types.GAME_ADDED,
  name: name,
  desc: desc,
  image: image,
  color: color
})
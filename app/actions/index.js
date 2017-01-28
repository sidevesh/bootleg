import * as types from '../constants/actionTypes';

export const callPaneSelect = (name) => ({
  type: types.PANE_SELECTED,
  name: name
})

export const callGameSelect = (index) => ({
  type: types.GAME_SELECTED,
  index: index
})

export const callGameDeSelect = (index) => ({
  type: types.GAME_DESELECTED
})

export const callGameAdd = (name, desc, image, color) => ({
  type: types.GAME_ADDED,
  name: name,
  desc: desc,
  image: image,
  color: color
})

export const callWindowResize = (width, height) => ({
  type: types.WINDOW_RESIZE,
  width: width,
  height: height
})

export const callNavPaneToggle = () => ({
  type: types.NAV_PANE_TOGGLE
})

export const callGameShowNav = (gameno) => ({
  type: types.GAME_SHOW_NAV,
  gameno: gameno
})

export const callGameNoShowNav = () => ({
  type: types.GAME_NOSHOW_NAV
})
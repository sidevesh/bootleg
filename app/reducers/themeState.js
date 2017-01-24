import * as types from '../constants/actionTypes';

const initialState = {
  accentColor: '#cc7f29',
  theme: 'light'
};

export default function themeState(state = initialState, action = {}) {
  switch (action.type) {
    //case types.DEVICE_CONNECTED:
    //  return {
    //    ...state,
    //    device_id: action.device_id,
    //    device_ip: action.device_ip,
    //  };
    default:
      return state;
  }
}
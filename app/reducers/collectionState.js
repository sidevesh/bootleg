import * as types from '../constants/actionTypes';

const initialState = {
  //
};

export default function connstate(state = initialState, action = {}) {
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
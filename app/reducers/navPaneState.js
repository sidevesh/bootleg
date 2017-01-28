// @flow
import * as types from '../constants/actionTypes';

const initialState = {
  paneItemsArray: [
                    {'name': 'Games', 'iconPath': 'm 15.999845,5.6547518 c -7.2862663,0 -13.663888,2.3549373 -13.663888,2.3549373 L 1.659041,8.2585385 1.588267,8.9388789 0.05407635,20.639369 c -0.41436849,3.236181 1.90289875,6.255477 5.13679935,6.670987 3.0135888,0.388116 5.7189693,-1.643776 6.4232833,-4.531798 l 8.775935,0 c 0.707737,2.88574 3.408552,4.919914 6.421,4.531798 3.235042,-0.417792 5.55231,-3.435947 5.1368,-6.672128 L 30.41256,8.9377375 30.340648,8.25968 29.663732,8.0131135 c 0,0 -6.381047,-2.3583617 -13.663885,-2.3583617 z m 0,2.2830222 c 6.262326,0 11.4231,1.7396627 12.271241,2.0318896 L 29.66373,20.957849 c 0.257982,2.012485 -1.127816,3.808078 -3.139157,4.067202 -2.012482,0.25684 -3.844608,-1.130093 -4.10373,-3.139155 l -0.03426,-0.39496 -0.142687,-0.996542 -12.48813,0 -0.1415465,0.997682 -0.03425,0.392679 C 9.3208631,23.896097 7.488737,25.281891 5.4762535,25.02391 3.4671942,24.763647 2.0802584,22.969191 2.3370983,20.955564 L 3.7297415,9.96852 C 4.5778845,9.6774367 9.7386539,7.937774 15.999845,7.937774 Z m -7.9905787,3.424531 0,2.283024 -2.2830218,0 0,2.283021 2.2830218,0 0,2.283022 2.2830227,0 0,-2.283022 2.283022,0 0,-2.283021 -2.283022,0 0,-2.283024 -2.2830227,0 z m 14.8396427,0 c -0.630114,0 -1.141509,0.511399 -1.141509,1.141511 0,0.630116 0.511395,1.141513 1.141509,1.141513 0.630115,0 1.141511,-0.511397 1.141511,-1.141513 0,-0.630112 -0.511396,-1.141511 -1.141511,-1.141511 z m -2.28302,2.283024 c -0.630116,0 -1.141512,0.511396 -1.141512,1.14151 0,0.630115 0.511396,1.141511 1.141512,1.141511 0.630114,0 1.141511,-0.511396 1.141511,-1.141511 0,-0.630114 -0.511397,-1.14151 -1.141511,-1.14151 z m 4.566045,0 c -0.630116,0 -1.141514,0.511396 -1.141514,1.14151 0,0.630115 0.511398,1.141511 1.141514,1.141511 0.630112,0 1.14151,-0.511396 1.14151,-1.141511 0,-0.630114 -0.511398,-1.14151 -1.14151,-1.14151 z m -2.283025,2.283021 c -0.630114,0 -1.141509,0.511398 -1.141509,1.141511 0,0.630112 0.511395,1.141511 1.141509,1.141511 0.630115,0 1.141511,-0.511399 1.141511,-1.141511 0,-0.630113 -0.511396,-1.141511 -1.141511,-1.141511 z'},
                    {'name': 'Add Game', 'iconPath': 'M 16,1.3085437e-4 C 7.1779182,1.3085437e-4 1.3085437e-4,7.1779182 1.3085437e-4,16 1.3085437e-4,24.822081 7.1779182,31.99987 16,31.99987 24.822081,31.99987 31.99987,24.822081 31.99987,16 31.99987,7.1779182 24.822081,1.3085437e-4 16,1.3085437e-4 Z M 16,2.4616491 C 23.49163,2.4616491 29.53835,8.508369 29.53835,16 29.53835,23.49163 23.49163,29.53835 16,29.53835 8.508369,29.53835 2.4616491,23.49163 2.4616491,16 2.4616491,8.508369 8.508369,2.4616491 16,2.4616491 Z m -1.230759,6.1537959 0,6.153796 -6.153796,0 0,2.461518 6.153796,0 0,6.153795 2.461518,0 0,-6.153795 6.153795,0 0,-2.461518 -6.153795,0 0,-6.153796 -2.461518,0 z'},
                    {'name': 'Settings', 'iconPath': 'M 10.858611,0.00407162 8.28702,1.0499999 9.8977518,5.0607868 C 7.8714382,6.1973621 6.196559,7.8722433 5.0585888,9.8999515 L 1.0505914,8.286432 l -1.04592883,2.5688 3.96755553,1.613517 c -0.3277248,1.118448 -0.5229644,2.309411 -0.5229644,3.531052 0,1.220252 0.1952396,2.412613 0.5229644,3.528267 l -3.96755553,1.614911 1.04592883,2.571588 4.0107868,-1.610726 c 1.1337861,2.022125 2.8212173,3.698405 4.8391635,4.839164 l -1.6135217,4.007996 2.568801,1.045923 1.613515,-3.967552 c 1.115662,0.329123 2.30523,0.522966 3.528272,0.522966 1.220245,0 2.412604,-0.195239 3.528263,-0.522966 l 1.613518,3.966161 2.57159,-1.045927 -1.610732,-4.010788 c 2.026313,-1.136572 3.701191,-2.811454 4.839161,-4.839159 l 4.008,1.613518 1.045931,-2.570198 -3.967558,-1.612123 c 0.327724,-1.115657 0.522965,-2.308011 0.522965,-3.528264 0,-1.220246 -0.195241,-2.412606 -0.522965,-3.528261 L 31.991942,10.859414 30.946015,8.2892216 26.935224,9.8999515 C 25.798653,7.8736369 24.123769,6.1987567 22.096064,5.0607868 L 23.709587,1.0527889 21.139389,0.00686077 19.527265,3.9744157 C 18.413001,3.6439024 17.222037,3.4486624 16.00039,3.4486624 c -1.220243,0 -2.412603,0.19524 -3.528263,0.5229643 L 10.854424,0.00407162 Z M 16.00039,6.2378046 c 5.408151,0 9.761999,4.3538494 9.761999,9.7619964 0,5.408146 -4.353848,9.761998 -9.761999,9.761998 -5.408144,0 -9.7619941,-4.353852 -9.7619941,-9.761998 0,-5.408147 4.3538501,-9.7619964 9.7619941,-9.7619964 z m 0,4.1837144 c -3.063869,0 -5.578283,2.514414 -5.578283,5.578282 0,3.063877 2.514414,5.578285 5.578283,5.578285 3.063877,0 5.578286,-2.514408 5.578286,-5.578285 0,-3.063868 -2.514409,-5.578282 -5.578286,-5.578282 z m 0,2.78914 c 1.556345,0 2.789149,1.232802 2.789149,2.789142 0,1.556344 -1.232804,2.789143 -2.789149,2.789143 -1.556338,0 -2.78914,-1.232799 -2.78914,-2.789143 0,-1.55634 1.232802,-2.789142 2.78914,-2.789142 z'}
                  ],
  selectedPane: 'Games',
  gameShowOn: -1
};

export default function navPaneState(state = initialState, action = {}) {
  switch (action.type) {
    case types.PANE_SELECTED:
      return {
        ...state,
        selectedPane: action.name
      };
    case types.GAME_SHOW_NAV:
      return {
        ...state,
        gameShowOn: action.gameno
      };
    case types.GAME_NOSHOW_NAV:
      return {
        ...state,
        gameShowOn: -1
      };
    default:
      return state;
  }
}
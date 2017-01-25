// @flow
import * as types from '../constants/actionTypes';

const initialState = {
  items:  [
            {'name': 'Arkham Knight', 'desc': 'lorem ipsum dolor sit amet', image: 'http://www.mobygames.com/images/covers/l/307314-batman-arkham-knight-limited-edition-playstation-4-front-cover.jpg', 'color': '#363636'},
            {'name': 'Arkham Knight', 'desc': 'lorem ipsum dolor sit amet', image: 'http://www.mobygames.com/images/covers/l/307314-batman-arkham-knight-limited-edition-playstation-4-front-cover.jpg', 'color': '#363636'},
            {'name': 'Arkham Knight', 'desc': 'lorem ipsum dolor sit amet', image: 'http://www.mobygames.com/images/covers/l/307314-batman-arkham-knight-limited-edition-playstation-4-front-cover.jpg', 'color': '#363636'},
            {'name': 'Arkham Knight', 'desc': 'lorem ipsum dolor sit amet', image: 'http://www.mobygames.com/images/covers/l/307314-batman-arkham-knight-limited-edition-playstation-4-front-cover.jpg', 'color': '#363636'},
            {'name': 'Arkham Knight', 'desc': 'lorem ipsum dolor sit amet', image: 'http://www.mobygames.com/images/covers/l/307314-batman-arkham-knight-limited-edition-playstation-4-front-cover.jpg', 'color': '#363636'},
            {'name': 'Arkham Knight', 'desc': 'lorem ipsum dolor sit amet', image: 'http://www.mobygames.com/images/covers/l/307314-batman-arkham-knight-limited-edition-playstation-4-front-cover.jpg', 'color': '#363636'},
            {'name': 'Arkham Knight', 'desc': 'lorem ipsum dolor sit amet', image: 'http://www.mobygames.com/images/covers/l/307314-batman-arkham-knight-limited-edition-playstation-4-front-cover.jpg', 'color': '#363636'},
            {'name': 'Arkham Knight', 'desc': 'lorem ipsum dolor sit amet', image: 'http://www.mobygames.com/images/covers/l/307314-batman-arkham-knight-limited-edition-playstation-4-front-cover.jpg', 'color': '#363636'},
            {'name': 'Arkham Knight', 'desc': 'lorem ipsum dolor sit amet', image: 'http://www.mobygames.com/images/covers/l/307314-batman-arkham-knight-limited-edition-playstation-4-front-cover.jpg', 'color': '#363636'},
            {'name': 'Arkham Knight', 'desc': 'lorem ipsum dolor sit amet', image: 'http://www.mobygames.com/images/covers/l/307314-batman-arkham-knight-limited-edition-playstation-4-front-cover.jpg', 'color': '#363636'},
            {'name': 'Arkham Knight', 'desc': 'lorem ipsum dolor sit amet', image: 'http://www.mobygames.com/images/covers/l/307314-batman-arkham-knight-limited-edition-playstation-4-front-cover.jpg', 'color': '#363636'},
            {'name': 'Arkham Knight', 'desc': 'lorem ipsum dolor sit amet', image: 'http://www.mobygames.com/images/covers/l/307314-batman-arkham-knight-limited-edition-playstation-4-front-cover.jpg', 'color': '#363636'}
          ],
  selectedItem: -1,
  orderBy: 'name'
};

export default function collectionState(state = initialState, action = {}) {
  switch (action.type) {
    case types.GAME_SELECTED:
      return {
        ...state,
        selectedItem: action.gameIndex
      };
    case types.GAME_ADDED:
      return {
        ...state,
        items: items.push({
          name: action.name,
          desc: action.desc,
          image: action.image,
          color: action.color
        })
      };
    default:
      return state;
  }
}
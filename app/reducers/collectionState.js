// @flow
import * as types from '../constants/actionTypes';

const initialState = {
  items:  [
            {'name': 'Arkham Knight', 'desc': 'lorem ipsum dolor sit amet', image: 'http://www.mobygames.com/images/covers/l/307314-batman-arkham-knight-limited-edition-playstation-4-front-cover.jpg', 'color': '#363636'},
            {'name': 'Assasins Creed IV Black Flag', 'desc': 'lorem ipsum dolor sit amet', image: 'http://www.mobygames.com/images/covers/l/280811-assassin-s-creed-iv-black-flag-playstation-4-front-cover.jpg', 'color': '#363636'},
            {'name': 'Grand Theft Auto', 'desc': 'lorem ipsum dolor sit amet', image: 'http://www.mobygames.com/images/covers/l/294566-grand-theft-auto-v-playstation-4-front-cover.jpg', 'color': '#363636'},
            {'name': 'The Walking Dead Complete First Season', 'desc': 'lorem ipsum dolor sit amet', image: 'http://www.mobygames.com/images/covers/l/296729-the-walking-dead-the-complete-first-season-plus-400-days-playstation-4-front-cover.jpg', 'color': '#363636'},
            {'name': 'WatchDogs', 'desc': 'lorem ipsum dolor sit amet', image: 'http://www.mobygames.com/images/covers/l/284614-watch-dogs-ps4-exclusive-edition-playstation-4-front-cover.jpg', 'color': '#363636'},
            {'name': 'FallOut 4 Automatron', 'desc': 'lorem ipsum dolor sit amet', image: 'http://www.mobygames.com/images/covers/l/348989-fallout-4-automatron-windows-front-cover.jpg', 'color': '#363636'},
            {'name': 'FarCry Primal', 'desc': 'lorem ipsum dolor sit amet', image: 'http://www.mobygames.com/images/covers/l/361714-far-cry-primal-apex-edition-xbox-one-front-cover.png', 'color': '#363636'},
            {'name': 'Resident Evil Zero', 'desc': 'lorem ipsum dolor sit amet', image: 'http://www.mobygames.com/images/covers/l/23745-resident-evil-0-gamecube-front-cover.jpg', 'color': '#363636'},
            {'name': 'Rise of the Tomb Raider', 'desc': 'lorem ipsum dolor sit amet', image: 'http://www.mobygames.com/images/covers/l/322039-rise-of-the-tomb-raider-collector-s-edition-windows-other.jpg', 'color': '#363636'},
            {'name': 'The Division', 'desc': 'lorem ipsum dolor sit amet', image: 'http://www.mobygames.com/images/covers/l/325677-tom-clancy-s-the-division-gold-edition-xbox-one-front-cover.png', 'color': '#363636'},
            {'name': 'Rainbow Six Siege', 'desc': 'lorem ipsum dolor sit amet', image: 'http://www.mobygames.com/images/covers/l/347554-tom-clancy-s-rainbow-six-siege-emerald-weapon-skin-windows-front-cover.jpg', 'color': '#363636'}
          ],
  selectedItem: -1,
  orderBy: 'name'
};

export default function collectionState(state = initialState, action = {}) {
  switch (action.type) {
    case types.GAME_SELECTED:
      return {
        ...state,
        selectedItem: action.index
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
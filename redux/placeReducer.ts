import {AppState} from './store';

export const SET_PLACE = 'setplace';

export const setPlaceAction = (place: placeState) => ({
  type: SET_PLACE as typeof SET_PLACE,
  place
});

export interface placeState {
  name: string,
  location:{
      lat: number,
      lon: number
  },

}

const initialstate: placeState = {
  name: "",
  location: {
      lat: 0,
      lon: 0
  }
};

export type ActionType =
  | ReturnType<typeof setPlaceAction>;

export default (
  state: placeState = initialstate,
  action: ActionType,
): placeState => {
  switch (action.type) {
    case 'setplace':
      return {
        ...state,...action.place,
      };
    default:
      return state;
  }
};

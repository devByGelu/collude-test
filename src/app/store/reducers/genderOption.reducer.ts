// import the interface
import { GenderOption } from '../models/genderOption.model';
import {
  GenderOptionAction,
  GenderOptionActionType,
} from '../actions/genderOption.action';
//create a dummy initial state
export interface GenderOptionsState {
  options: GenderOption[];
  selected: number; //index
}

const initialState: GenderOptionsState = {
  options: [{ label: 'Diverse' }, { label: 'Woman' }, { label: 'Man' }],
  selected: 1, // initially let first item be selected (Male)
};

export function GenderOptionsReducer(
  state: GenderOptionsState = initialState,
  action: GenderOptionAction
) {
  switch (action.type) {
    case GenderOptionActionType.ADD_GENDER:
      return {
        ...state,
        options: [...state.options, action.payload],
      };
    case GenderOptionActionType.SET_NEXT_GENDER: {
      const options = state.options;
      const index = state.selected;
      return {
        ...state,
        selected: index === options.length - 1 ? 0 : index + 1,
      };
    }
    case GenderOptionActionType.SET_PREV_GENDER: {
      const options = state.options;
      const index = state.selected;
      return {
        ...state,
        selected: index === 0 ? options.length - 1 : index - 1,
      };
    }
    default:
      return state;
  }
}

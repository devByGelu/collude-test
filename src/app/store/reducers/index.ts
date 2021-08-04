// import {
//   ShoppingListState,
//   shoppingListReducer,
// } from './shopping-list.reducer';
import { ActionReducerMap } from '@ngrx/store';
import {
  GenderOptionsState,
  GenderOptionsReducer,
} from './genderOption.reducer';

export const rootReducer = {};

export interface AppState {
  genderOptions: GenderOptionsState;
}

export const reducers: ActionReducerMap<AppState, any> = {
  genderOptions: GenderOptionsReducer,
};

import { Action } from '@ngrx/store';
import { GenderOption } from '../models/genderOption.model';
export enum GenderOptionActionType {
  ADD_GENDER = '[GENDER] Add Gender',
  SET_NEXT_GENDER = 'Set Next Gender',
  SET_PREV_GENDER = 'Set Prev Gender',
}
export class AddGenderAction implements Action {
  readonly type = GenderOptionActionType.ADD_GENDER;
  //add an optional payload
  constructor(public payload: GenderOption) {}
}

export class SetNextGenderAction implements Action {
  readonly type = GenderOptionActionType.SET_NEXT_GENDER;
  //add an optional payload
}

export class SetPrevGenderAction implements Action {
  readonly type = GenderOptionActionType.SET_PREV_GENDER;
  //add an optional payload
}

export type GenderOptionAction = AddGenderAction | SetNextGenderAction | SetPrevGenderAction;

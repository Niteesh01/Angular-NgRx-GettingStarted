import { UserActions, UserActionTypes } from './user.actions';
import { UserState } from './user.reducer';

import { State } from './../../products/state';
import { createFeatureSelector, createSelector } from '@ngrx/store';




export interface UserState {
  maskUserName: boolean
  currentUser: string

}

const initialState: UserState = {
  maskUserName: true,
  currentUser: null
}

const getUserFeatureState = createFeatureSelector<UserState>('users')

export const getMaskUserName = createSelector(
  getUserFeatureState,
  state =>state.maskUserName
)

export const getCurrentUser = createSelector(
  getUserFeatureState,
  state=>state.currentUser
)


export function reducer(state = initialState, action: UserActions){
  switch(action.type) {

    case UserActionTypes.MaskUserName:
      return {
        ...state,
        maskUserName: action.payload
      };
    default:
      return state
  }
}

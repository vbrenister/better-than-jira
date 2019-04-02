import {
  ActionReducerMap,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Union, ActionType } from './actions';

export interface User {
  username: string;
  displayName: string;
}

export interface State {
  user: User;
}

const initialState: State = {
  user: {
    username: '',
    displayName: ''
  }
};

export const getUsername =
  createSelector<State, string, string>(
    (s: State) => s.user.username,
    (username) => username);

export const reducers: ActionReducerMap<State> = {
  user
};

function user(state: User = initialState.user, action: Union): User  {
  switch (action.type) {
    case ActionType.LoginSuccess:
    case ActionType.SetUserData:
      return action.user;
    case ActionType.Logout:
      return initialState.user;
  }
  return state;
}


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

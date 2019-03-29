import {
  ActionReducerMap,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Union, ActionType } from './actions';

interface User {
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
      return {
        username: action.username,
        displayName: `Mr.${action.username}`
      };
  }
  return state;
}


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

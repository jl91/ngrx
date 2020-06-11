import {Action, createReducer, on} from '@ngrx/store';
import {UserState} from '../states/user.state';
import {AllUsersRequestAction} from '../actions/all-users-request.action';
import {AllUsersResponseAction} from '../actions/all-users-response.action';

const initialState: UserState = {
  users: undefined
};

const userReducer = createReducer(
  initialState,
  on(
    new AllUsersRequestAction().getInstance(),
    (state) => ({
      ...state
    })
  ),
  on(
    new AllUsersResponseAction().getInstance(),
    (state, action: AllUsersResponseAction) => ({
      ...state,
      users: action.payload
    })
  )
);

export function reducer(state: UserState | undefined, action: Action) {
  console.log(action);
  return userReducer(state, action);
}

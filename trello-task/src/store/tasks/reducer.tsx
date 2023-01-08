import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from './actionTypes';

import { UserActions, UserState } from './types';

const initialState: UserState = {
  users: [],
  error: null,
  loading: false,
};

const userReducer = (state = initialState, action: UserActions) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload.users,
        error: null,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;

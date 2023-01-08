import { combineReducers } from 'redux';

import userReducer from './tasks/reducer';

const rootReducer = combineReducers({
  dataUser: userReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;

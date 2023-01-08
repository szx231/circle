import { all, fork } from 'redux-saga/effects';

import userSaga from './tasks/sagas';

export function* rootSaga() {
  yield all([fork(userSaga)]);
}

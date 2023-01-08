import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchUserFailure, fetchUserSuccess } from './action';
import { FETCH_USER_REQUEST } from './actionTypes';
import { IUser } from './types';

const getUsers = () => axios.get<IUser[]>('http://82.202.204.94/tmp/test.php');

function* fetchUserSaga(): any {
  try {
    const response = yield call(getUsers);
    yield put(
      fetchUserSuccess({
        users: response.data,
      }),
    );
  } catch (e) {
    yield put(
      fetchUserFailure({
        error: e.message,
      }),
    );
  }
}

function* userSaga() {
  yield all([takeLatest(FETCH_USER_REQUEST, fetchUserSaga)]);
}

export default userSaga;

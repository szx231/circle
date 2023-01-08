import { createSelector } from 'reselect';

import { AppState } from '../rootReducer';

const getLoading = (state: AppState) => state.dataUser.loading;

const getUsers = (state: AppState) => state.dataUser.users;

const getError = (state: AppState) => state.dataUser.error;

export const getLoadingSelector = createSelector(getLoading, (users) => users);

export const getUsersSelector = createSelector(getUsers, (users) => users);

export const getErrorSelector = createSelector(getError, (error) => error);

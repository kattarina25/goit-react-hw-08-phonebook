import { createReducer, combineReducers } from '@reduxjs/toolkit';
import UsersActions from './UsersActions';

const {
  registerSuccess,
  loginSuccess,
  logoutSuccess,
  getCurrentUserSuccess,
  registerError,
  loginError,
  logoutError,
  getCurrentUserError,
} = UsersActions;

const initialUserState = { name: null, email: null };

const setError = (_, { payload }) => payload;

const user = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initialUserState,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const isAuthenticated = createReducer(false, {
  [registerSuccess]: () => true,
  [loginSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [registerError]: () => false,
  [loginError]: () => false,
  [logoutError]: () => false,
  [getCurrentUserError]: () => false,
  [logoutSuccess]: () => false,
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [registerError]: setError,
  [loginError]: setError,
  [logoutError]: setError,
  [getCurrentUserError]: setError,
});

export default combineReducers({
  user,
  isAuthenticated,
  token,
  error,
});

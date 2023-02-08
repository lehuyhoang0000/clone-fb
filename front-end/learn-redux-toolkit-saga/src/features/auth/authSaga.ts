import { PayloadAction } from '@reduxjs/toolkit';
import { push } from 'connected-react-router';
import { Navigate } from 'react-router-dom';
import { call, delay, fork, put, take } from 'redux-saga/effects';
import { authActions, LoginPayload } from './authSlice';


function* handleLogin(payload: LoginPayload) {
  yield delay(1000)
  console.log('Handle Login', payload);
  try {
    yield delay(1000);
    localStorage.setItem('access_token', 'fake_token');
    yield put(
      authActions.loginSuccess({
        id: 1,
        name: 'Huy Hoang',
        role:'ADMIN'
      })
    );

  } catch (err: any | Error) {
    yield put(authActions.loginFailed(err.message));
    console.log('err')
  }
}

function* handleLogout() {
  yield delay(1000);
  console.log('Handle Logout');
  localStorage.removeItem('access_token');
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    if (!isLoggedIn) {
      const actions: PayloadAction<LoginPayload> = yield take(authActions.login.type);
      yield fork(handleLogin, actions.payload);
    }

    yield take(authActions.logout.type);
    yield call(handleLogout);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}

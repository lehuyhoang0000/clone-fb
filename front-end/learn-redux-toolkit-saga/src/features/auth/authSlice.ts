import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'models/user';

export interface AuthSate {
  isLoggedIn: boolean;
  logging?: boolean;
  currenUser?: User;
}

export interface LoginPayload {
  username: string;
  password: string | number;
}

const initialState: AuthSate = {
  isLoggedIn: false,
  logging: false,
  currenUser: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, actions: PayloadAction<LoginPayload>) {
      state.logging = true;
    },

    loginSuccess(state, actions: PayloadAction<User>) {
      state.isLoggedIn = true;
      state.logging = false;
      state.currenUser = actions.payload;
    },

    loginFailed(state, actions: PayloadAction<string>) {
      state.logging = false;
    },

    logout(state) {
      state.isLoggedIn = true;
      state.currenUser = undefined;
    },
  },
});

// Actions
export const authActions = authSlice.actions;

// Selectors

export const selectorisLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectorlogging = (state: any) => state.auth.logging;
// Reducers

const authReducer = authSlice.reducer;
export default authReducer;

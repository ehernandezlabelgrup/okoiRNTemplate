import { LOGIN_USER_SUCCESS, REMEMBER_PASSWORD, SET_TOKEN_SUCCESS, UPDATE_USER_SUCCESS } from '../constants/user'

export const actionLoginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  user
})

export const actionSetTokenSuccess = ({ token, refreshToken }) => ({
  type: SET_TOKEN_SUCCESS,
  token,
  refreshToken
})
export const actionLogout = () => ({
  type: SET_TOKEN_SUCCESS
})
export const actionRememberPassword = () => ({
  type: REMEMBER_PASSWORD
})

export const actionUpdateUserSuccess = (inputs) => ({
  type: UPDATE_USER_SUCCESS,
  inputs
})

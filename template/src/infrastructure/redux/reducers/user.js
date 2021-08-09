import { LOGIN_USER_SUCCESS, LOGOUT, REMEMBER_PASSWORD, SET_TOKEN_SUCCESS, UPDATE_USER_SUCCESS } from '../constants/user'

const initialState = {
  loading: false,
  error: false,
  user: null,
  remember: true
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...action,
        loading: false,
        error: false
      }

    case SET_TOKEN_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          token: action.token,
          refreshToken: action.token
        }
      }

    case REMEMBER_PASSWORD:
      return {
        ...state,
        remember: !state.remember
      }

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.inputs

        }
      }

    case LOGOUT:
      return initialState

    default:
      return state
  }
}

export default userReducer

// api.js
import merge from 'lodash/merge'
import { configureRefreshFetch, fetchJSON } from 'refresh-fetch'
import { url, endpoint } from './configuration'
import { store } from '../redux/store'
import { actionLogout, actionSetTokenSuccess } from '../redux/actions/user'

const retrieveToken = () => store.getState().userReducer?.user?.token
const retrieveRefreshToken = () =>
  store.getState().userReducer.user.refreshToken
const saveToken = token => store.dispatch(actionSetTokenSuccess(token))

const fetchJSONWithToken = async (url, options = {}, refresh = null) => {
  const token = retrieveToken()

  let optionsWithToken = options
  if (token != null && refresh == null) {
    optionsWithToken = merge({}, options, {
      headers: {
        Authorization: refresh || token,
        'Content-Type': 'application/json'
      }
    })
  }
  return fetchJSON(url, optionsWithToken)
}

const fetchNoToken = (url, variables) => {
  const optionsWithToken = merge({}, variables, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return fetchJSON(url, optionsWithToken)
}

const shouldRefreshToken = error =>
  // if (error.message === 'Network request failed') return 'no-conection'
  error?.response?.status === 401
const refreshToken = () => {
  const refresh = retrieveRefreshToken()
  console.log(refresh)
  return fetchJSONWithToken(
    `${url}${endpoint.refresh}`,
    {
      method: 'PUT',
      headers: {
        Authorization: refresh,
        'Content-Type': 'application/json'
      }
    },
    refresh
  )
    .then(response => {
      saveToken(response.body)
    })
    .catch(() => store.dispatch(actionLogout()))
}

const fetch = configureRefreshFetch({
  fetch: fetchJSONWithToken,
  shouldRefreshToken,
  refreshToken
})

export { fetch, fetchNoToken }

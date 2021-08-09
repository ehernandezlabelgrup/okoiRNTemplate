import { useState } from 'react'
import { url } from '../../api/configuration'

// api.js
import { fetch, fetchNoToken } from '../../api/api'

export const useFetch = (point, widthToken = true) => {
  const [loading, setLoading] = useState(false)

  const buildQuery = (variables, method) => {
    let queries = '?'
    if (variables && method === 'GET') {
      Object.keys(variables).forEach(i => {
        queries += `${i}=${variables[i]}`
      })
    }

    return variables ? queries : ''
  }

  const makeFetch = async (data = {}) => {
    setLoading(true)
    const { variables, method, addToURL = '' } = data
    const selectedFetch = !widthToken ? fetchNoToken : fetch

    const queries = buildQuery(variables, method)
    console.log(url + point + addToURL + queries)
    const { status, response, message } = await selectedFetch(url + point + addToURL + queries, {
      method: data.method || 'POST',
      body: method !== 'GET' ? JSON.stringify(data.variables) : null
    })

      .then(({ response, body }) => {
        return {
          status: response.status,
          response: body
        }
      })
      .catch(err => {
        return {
          status: err.status,
          response: err.body,
          message: err?.body?.MESSAGE
        }
      })

    setLoading(false)

    return {
      status, response, message
    }
  }

  return [makeFetch, { loading }]
}

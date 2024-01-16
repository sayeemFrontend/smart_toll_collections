import axios from 'axios'
import { AnyObject, ApiParamsType } from './api_types'
import { credentials } from './credentials'
import { notify } from '../Notify'

export const navigateTo = (name: string) => window.location.replace(name)

const baseUrl = credentials.baseUrl

function debounce(fn: () => Promise<AnyObject>, delay = 200) {
  let timer: NodeJS.Timeout
  let queue: unknown[] = []
  return (options: null | object = null) => {
    if (options) {
      queue.push(options)
    }
    if (timer) clearTimeout(timer)
    timer = setTimeout(async () => {
      const result = await fn()
      if (result?.status) {
        queue.forEach(async (options: ApiParamsType & { method: string }) => {
          const { method, ...restOptions } = options
          if (method === 'get') {
            await getApi(restOptions)
          } else if (method === 'post') {
            await postApi(restOptions)
          }
        })
        queue = []
      } else {
        // if (navigationRef.isReady()) {
        //   navigateTo('login');
        // } else {
        //   console.log('Your navigationRef is not ready');
        // }
      }
    }, delay)
  }
}

const debounceTokenGenerate = debounce(newTokenGenerate)

async function newTokenGenerate(): Promise<AnyObject> {
  const { refreshToken } = await credentials.getTokens()
  if (!refreshToken) return { status: false }
  try {
    const response = await axios.post(`${baseUrl}/auth/user/token`, {
      refreshToken: refreshToken,
    })
    const token = response?.data?.token
    const newRefreshToken = response?.data?.refreshToken
    await credentials.setTokens({ token, refreshToken: newRefreshToken })
    return { status: true, data: { token, refreshToken: newRefreshToken } }
  } catch (error) {
    console.log(error)
  }
  return { status: false }
}

const handleError = async (error: AnyObject, requestedOptions: AnyObject) => {
  if (error.response) {
    const { data, config } = error.response as { data: AnyObject; config: AnyObject }

    if (data.error === 'Token expired') {
      await debounceTokenGenerate({ ...requestedOptions, method: config.method })
    } else if (
      data.error === 'Refresh token expired' ||
      data.error === 'Refresh token does not exist!'
    ) {
      // if (navigationRef.isReady()) {
      //   navigateTo('login')
      // } else {
      //   console.log('Your navigationRef is not ready')
      // }
    } else {
      // handle field error
      notify({
        message: `${data.error || 'unknown error'}`,
        styles: { box: { top: '80%' } },
      })
    }
  } else if (error.request) {
    if (!window.navigator.onLine) {
      notify({ message: 'Connect Your Network', styles: { box: { top: '80%' } } })
    }
  } else {
    // store.dispatch(requestedOptions.fail())
  }
}

export async function getApi({ end_point = '', resolve, reject, responseAlert }: ApiParamsType) {
  try {
    const response = await axios.get(`${baseUrl}/${end_point}`, {
      headers: await credentials.getHeaders(),
    })
    if (response.status) {
      const result = response.data
      if (responseAlert && result.message) {
        notify({ message: result.message })
      }
      if (resolve) resolve(response.data)
    }
  } catch (error) {
    const result = error.response?.data || {}

    if (responseAlert && result.error) {
      notify({ message: result.error })
    }

    if (reject) reject(error)
  }
}

export async function postApi({
  end_point = '',
  resolve,
  reject,
  body,
  responseAlert,
}: ApiParamsType) {
  try {
    const response = await axios.post(`${baseUrl}/${end_point}`, body, {
      headers: await credentials.getHeaders(),
    })
    if (response.status) {
      const result = response.data
      if (responseAlert && result.message) {
        notify({ message: result.message })
      }
      if (resolve) resolve(result)
    }
  } catch (error) {
    const result = error.response?.data || {}
    if (responseAlert && result.error) {
      notify({ message: result.error })
    }
    if (reject) reject(result)
    handleError(error, { end_point, body, resolve, reject })
  }
}

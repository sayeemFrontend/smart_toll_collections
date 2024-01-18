import { AnyObject } from 'chart.js/dist/types/basic'
import { TokensType } from './api_types'
import { credentials } from './credentials'
import { getApi, postApi } from './methods'
import { store } from '../../stores/store'
import { userInfoFail, userInfoSuccess } from '../../stores/userSlice'
import redirectToRoute from '../../utils/navigateTo'
import { notify } from '../Notify'

export const SUPER_ADMIN = 1
export const CUSTOMER_ADMIN = 2
export const CUSTOMER_USER = 3
export const USER_VIEWS_ONLY = 5
export const refreshTime = 1000 * 25

export async function getUserInfo() {
  await getApi({
    end_point: `user/myinfo`,
    resolve: (res: AnyObject) => {
      notify({ message: 'login success' })
      const { data } = res
      store.dispatch(userInfoSuccess({ data }))
      redirectToRoute('/dashboard')
    },
    reject: () => {
      store.dispatch(userInfoFail())
      notify({ message: 'user name or password incorrect' })
    },
  })
}

const resolve = async (response: TokensType) => {
  const { token, refreshToken } = response
  await credentials.setTokens({ token, refreshToken })
  await getUserInfo()
}
const reject = (error) => {
  console.log('reject', error)
}
export async function loginByToken(body = {}) {
  return await postApi({
    end_point: 'auth/user/login',
    body: body,
    resolve: resolve,
    reject: reject,
  })
}

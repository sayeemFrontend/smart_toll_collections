// const baseUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BASE_URL_PROD : process.env.REACT_APP_BASE_URL_DEV;

const baseUrl = 'https://ebs.thinkfoundation.com.bd/api'

async function getTokens() {
  const tokens = { token: null, refreshToken: null }
  try {
    const t = window.localStorage.getItem('token')
    const rt = window.localStorage.getItem('refreshToken')
    if (t) {
      tokens['token'] = JSON.parse(t)
    }
    if (rt) {
      tokens['refreshToken'] = JSON.parse(rt)
    }
  } catch (error) {
    console.log(error)
  }
  return tokens
}

async function setTokens(option = {}) {
  try {
    for (const key in option) {
      await window.localStorage.setItem(key, JSON.stringify(option[key]))
    }
  } catch (error) {
    console.log(error)
  }
}

async function removeTokens() {
  try {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('refreshToken')
    // NotificationBar({ message: 'Successfully logout' })
    // await getUserInfo()
  } catch (error) {
    console.log(error)
  }
}

async function getHeaders() {
  const res = await getTokens()
  const token = res?.token
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  }
  return headers
}

export const credentials = {
  baseUrl,
  getHeaders,
  getTokens,
  setTokens,
  removeTokens,
}

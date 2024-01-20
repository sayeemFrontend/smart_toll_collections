// const baseUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BASE_URL_PROD : process.env.REACT_APP_BASE_URL_DEV;

import Cookies from 'js-cookie'

const baseUrl = 'https://ebs.thinkfoundation.com.bd/api'

async function getTokens() {
  const tokens = { token: null, refreshToken: null }
  try {
    const t = Cookies.get('token')
    const rt = Cookies.get('refreshToken')
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
      Cookies.set(key, JSON.stringify(option[key]))
    }
  } catch (error) {
    console.log(error)
  }
}

async function removeTokens() {
  try {
    Cookies.remove('token')
    Cookies.remove('refreshToken')
  } catch (error) {
    console.log(error)
    console.log('removes fails')
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

export function isAuthenticate() {
  const isAuth = Cookies.get('token')
  return isAuth
}

export function getAuthProps() {
  const isAuth = Cookies.get('token') || false
  return {
    props: {
      isAuth,
    },
  }
}

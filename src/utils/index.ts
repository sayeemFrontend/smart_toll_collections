import { store } from '../stores/store'
import { logout } from '../stores/userSlice'

export function capitalize(str: string) {
  return str.slice(0, 1).toUpperCase() + str.slice(1)
}

const emptySymbol = [{}, [], '', undefined, null]
const mapObject = new Map()
emptySymbol.forEach((it) => {
  mapObject.set(JSON.stringify(it), true)
})

export function checkEmpty(data = {} || [] || '' || null) {
  const strSymbol = JSON.stringify(data)
  return !!mapObject.get(strSymbol)
}

export function removeNullParams(params = {}) {
  const validParam = {}
  for (const key in params) {
    const nullAble = params[key] === undefined || params[key] === null
    if (!nullAble) {
      validParam[key] = params[key]
    }
  }
  return validParam
}

export function joinQueryParam(obj = {}) {
  const stringArray = Object.keys(obj).map((item) => `${item}=${obj[item]}`)
  return stringArray.join('&')
}

export function makeLogout() {
  store.dispatch(logout)
}

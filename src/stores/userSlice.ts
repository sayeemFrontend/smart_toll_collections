import { createSlice } from '@reduxjs/toolkit'
import { navigateTo } from '../components/apis/methods'

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    isLoading: true,
    user: {},
    isError: false,
    isAuthenticated: false,
  },
  reducers: {
    userInfoInit: (state) => {
      state.isLoading = true
    },
    userInfoSuccess: (state, action) => {
      state.isLoading = false
      state.user = action.payload.data || {}
      state.isError = false
      state.isAuthenticated = true
    },
    userInfoUpdate: (state, action) => {
      return { ...state, user: { ...state.user, ...action.payload.data } }
    },
    userInfoFail: (state) => {
      state.isLoading = false
      state.isError = true
      state.isAuthenticated = false
    },
    logout: () => {
      localStorage.clear()
      sessionStorage.clear()
      navigateTo('/')
    },
  },
})

export const { userInfoFail, userInfoInit, userInfoSuccess, userInfoUpdate, logout } =
  userInfoSlice.actions

export default userInfoSlice.reducer

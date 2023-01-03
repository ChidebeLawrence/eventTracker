import { createSlice } from '@reduxjs/toolkit'

const initialState = {}
const namespace = 'auth'

export const AuthenticationStore = createSlice({
  name: 'AuthenticationStore',
  initialState,
  reducers: {},
})

export default AuthenticationStore.reducer

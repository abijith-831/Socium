import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface User {
  id: string
  username: string
  email: string
  password: string
  avatar?: string
  cover?: string
  surname?: string
  description?: string
  city?: string
  school?: string
  work?: string
  website?: string
  createdAt: string
}

interface UserState {
  currentUser: User | null
  loading: boolean
  error: boolean
  isAuthenticated: boolean
}

const initialState: UserState = {
  currentUser: null,
  loading: false,
  error: false,
  isAuthenticated: false
}
 
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signUpSuccess: (state, action: PayloadAction<UserState['currentUser']>) => {
      state.currentUser = action.payload
      state.loading = false
      state.error = false
      state.isAuthenticated = true
    },
    clearUser: (state) => {
      state.currentUser = null
      state.loading = false
      state.error = false
      state.isAuthenticated = false
    },
    loginSuccess: (state, action: PayloadAction<UserState['currentUser']>) => {
      state.currentUser = action.payload
      state.isAuthenticated = true
      state.loading = false
      state.error = false
    }
  }
})

export const { signUpSuccess, clearUser , loginSuccess} = userSlice.actions
export default userSlice.reducer
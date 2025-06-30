import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  avatar?: string;
  cover?: string;
  surname?: string;
  description?: string;
  city?: string;
  school?: string;
  work?: string;
  website?: string;
  createdAt: string;
  // Relations data (optional - you might want to include these for better UX)
  posts?: Post[];
  comments?: Comment[];
  likes?: Like[];
  followers?: Follower[];
  following?: Follower[];
  followRequestSend?: FollowRequest[];
  followRequestReceived?: FollowRequest[];
  blockSend?: Block[];
  blockReceived?: Block[];
  stories?: Story[];
  // Computed fields for better UX
  followersCount?: number;
  followingCount?: number;
  postsCount?: number;
}


// Additional interfaces for related data (optional)
interface Post {
  id: string;
  content: string;
  image?: string;
  createdAt: string;
  userId: string;
  // add other post fields as needed
}

interface Comment {
  id: string;
  content: string;
  createdAt: string;
  userId: string;
  postId: string;
  // add other comment fields as needed
}

interface Like {
  id: string;
  userId: string;
  postId: string;
  createdAt: string;
}

interface Follower {
  id: string;
  followerId: string;
  followingId: string;
  createdAt: string;
}

interface FollowRequest {
  id: string;
  senderId: string;
  receiverId: string;
  createdAt: string;
}

interface Block {
  id: string;
  blockerId: string;
  blockedId: string;
  createdAt: string;
}

interface Story {
  id: string;
  content: string;
  image?: string;
  createdAt: string;
  expiresAt: string;
  userId: string;
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
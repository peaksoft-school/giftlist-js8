import { createSlice } from '@reduxjs/toolkit'
import { getOneFriendRequest } from './friendThunk'
import { frendsSeachThunk } from '../globalSeach/frendsSeach/frendsThunk'

const initialState = {
   friendProfile: {},
}
export const friendSlice = createSlice({
   name: 'friends',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getOneFriendRequest.fulfilled, (state, action) => {
            state.friendProfile = action.payload
         })
         .addCase(frendsSeachThunk.fulfilled, (state, action) => {
            if (Array.isArray(action.payload)) {
               if (action.payload.length) {
                  state.friendProfile = action.payload
               }
            }
         })
   },
})

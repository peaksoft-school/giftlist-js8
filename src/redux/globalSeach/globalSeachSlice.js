const { createSlice } = require('@reduxjs/toolkit')
const { getGlobalSeachThunk } = require('./globalSeachThunk')

const initialState = {
   allDatas: [],
   error: '',
   isLoading: '',
}

export const globalSeachSlice = createSlice({
   name: 'globalSeach',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getGlobalSeachThunk.rejected, (state, action) => {
         state.error = action.error
         state.isLoading = false
      })
      builder.addCase(getGlobalSeachThunk.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(getGlobalSeachThunk.fulfilled, (state, action) => {
         state.isLoading = false
         state.allDatas = action.payload
      })
   },
})

export const globalSeachActions = globalSeachSlice.actions

import { createSlice } from '@reduxjs/toolkit'
import { getHolidayDetails } from './holidayDetailThunk'

const initialState = {
   holidayDetail: [],
   isLoading: true,
   error: '',
}

export const holidayDetailSlice = createSlice({
   name: 'holidayDetail',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getHolidayDetails.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getHolidayDetails.fulfilled, (state, action) => {
            state.holiday = action.payload
            state.isLoading = false
         })
         .addCase(getHolidayDetails.rejected, (state, action) => {
            state.error = action.payload
            state.isLoading = false
         })
      // .addCase(postHolidayDetails.pending, (state) => {
      //    state.isLoading = true
      // })
      // .addCase(postHolidayDetails.fulfilled, (state, action) => {
      //    state.error = action.payload
      // })
      // .addCase(postHolidayDetails.rejected, (state, action) => {
      //    state.error = action.payload
      //    state.isLoading = false
      // })
   },
})

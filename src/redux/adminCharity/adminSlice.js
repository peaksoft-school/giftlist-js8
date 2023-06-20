import { createSlice } from '@reduxjs/toolkit'
import { deleteComplaint, getAllCharities } from './adminCharityThunk'

const initialState = {
   isLoading: false,
   error: '',
   complaints: [],
   getComplaintData: [],
}
const complaintSlice = createSlice({
   name: 'complaint',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getAllCharities.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.getComplaintData = payload
         })
         .addCase(getAllCharities.rejected, (state, { payload }) => {
            state.error = payload
            state.isLoading = false
            state.getAllCharities = {}
         })
         .addCase(getAllCharities.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.postAllCharities = payload
         })
         .addCase(deleteComplaint.pending, (state) => {
            state.isLoading = true
            state.error = ''
         })
         .addCase(deleteComplaint.fulfilled, (state, action) => {
            state.isLoading = false
            state.complaints = state.complaints.filter(
               (complaint) => complaint.id !== action.payload
            )
         })
         .addCase(deleteComplaint.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
         })
   },
})

export default complaintSlice

import { createAsyncThunk } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'
import {
   deleteCharityAdmin,
   getCharityAdmin,
   getCharityProfile,
   postCharityAdmin,
   putCharityAdmin,
} from '../../service/adminCharityService'

export const getAllCharities = createAsyncThunk(
   'complaint/getAllCharities',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await getCharityAdmin()
         return data
      } catch (error) {
         if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         throw error
      }
   }
)

export const getCharityAdminProfile = createAsyncThunk(
   'complaint/getCharityAdminProfile',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await getCharityProfile()
         const dataCharities = data.elements[0]
         const twoDataItems = dataCharities.slice(0, 4)
         return twoDataItems
      } catch (error) {
         if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
      }
      return rejectWithValue('Something went wrong')
   }
)

export const postComplaint = createAsyncThunk(
   'complaint/postComplaint',
   async (payload, { rejectWithValue }) => {
      try {
         const data = await postCharityAdmin(payload)
         return data
      } catch (error) {
         if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
      }
      return rejectWithValue('Something went wrong')
   }
)

export const putComplaint = createAsyncThunk(
   'complaint/putComplaint',
   async (_, { rejectWithValue }) => {
      try {
         const data = await putCharityAdmin()
         return data
      } catch (error) {
         if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
      }
      return rejectWithValue
   }
)

export const deleteComplaint = createAsyncThunk(
   'complaint/deleteComlaint',
   async (payload) => {
      try {
         const result = await deleteCharityAdmin(payload.id)
         return result
      } catch (error) {
         return error
      }
   }
)

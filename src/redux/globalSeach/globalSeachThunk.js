import { createAsyncThunk } from '@reduxjs/toolkit'
import { getGlobalSeachService } from '../../service/globalSeachService'
import { getHolidays } from '../holiday/holydayThunk'

export const getGlobalSeachThunk = createAsyncThunk(
   'global/getGlobalSeach',
   async ({ showToast, keyword }, { dispatch }) => {
      try {
         console.log(keyword)
         if (keyword) {
            const { data } = await getGlobalSeachService(keyword)
            return data
         }
         dispatch(getHolidays(showToast))
         return []
      } catch (error) {
         return showToast(
            'error',
            ' Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
      }
   }
)

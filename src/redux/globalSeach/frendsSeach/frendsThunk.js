import { createAsyncThunk } from '@reduxjs/toolkit'
import { getfrendsSeachService } from '../../../service/friendsSeachService/frendsSeachService'
import { getOneFriendRequest } from '../../friends/friendThunk'

export const frendsSeachThunk = createAsyncThunk(
   'frends/getfrendsSeach',
   async ({ showToast, keyword }, { dispatch }) => {
      try {
         if (keyword) {
            const { data } = await getfrendsSeachService(keyword)
            return data
         }
         dispatch(getOneFriendRequest(showToast))
         return []
      } catch (error) {
         return showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
      }
   }
)

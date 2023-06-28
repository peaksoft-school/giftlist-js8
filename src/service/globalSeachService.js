import { axiosFileInstance } from '../api/axiosFileInstance'

export const getGlobalSeachService = (keyWord) => {
   return axiosFileInstance.get('/api/holidays', {
      params: {
         keyWord,
      },
   })
}

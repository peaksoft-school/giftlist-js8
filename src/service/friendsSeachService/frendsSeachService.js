import { axiosFileInstance } from '../../api/axiosFileInstance'

export const getfrendsSeachService = (keyWord) => {
   return axiosFileInstance.get('/api/friends/seach', {
      params: {
         keyWord,
      },
   })
}

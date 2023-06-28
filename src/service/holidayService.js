import { axiosInstance } from '../api/axiosInstance'

export const getService = (keyWord) => {
   return axiosInstance.get('api/holidays', {
      params: {
         keyWord,
      },
   })
}

export const postService = (url, postData) => {
   return axiosInstance.post(url, postData)
}

export const putService = (url, putData, params) => {
   return axiosInstance.put(url, putData, {
      params: {
         holidayId: params,
      },
   })
}

export const deleteService = (url, params) => {
   return axiosInstance.delete(url, { params })
}

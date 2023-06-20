import { axiosInstance } from '../api/axiosInstance'

export const getComplai = () => {
   return axiosInstance.get(`/api/charity-admin`)
}

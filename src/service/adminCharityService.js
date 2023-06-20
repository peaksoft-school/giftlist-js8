import { axiosInstance } from '../api/axiosInstance'

export const getCharityAdmin = () => {
   return axiosInstance.get(`/api/charity-admin`)
}
export const getCharityProfile = (id) => {
   return axiosInstance.get(`/api/charity-admin/profile?id=${id}`)
}
export const putCharityAdmin = (data) => {
   return axiosInstance.put(`/api/charity-admin`, data)
}
export const postCharityAdmin = (data) => {
   return axiosInstance.post(`/api/chrity-admin`, data)
}
export const deleteCharityAdmin = (id) => {
   return axiosInstance.delete(`/api/charity-admin?id=${id}`)
}

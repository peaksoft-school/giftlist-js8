import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllCharities } from '../../redux/adminCharity/adminCharityThunk'

const AdminCharity = () => {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getAllCharities())
   }, [])
   return (
      <div>
         <h1>Благотворительность</h1>
      </div>
   )
}

export default AdminCharity

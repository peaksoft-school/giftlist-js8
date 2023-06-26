import React, { memo } from 'react'
import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import {
   acceptApplicationRequest,
   rejectApplicationRequest,
} from '../../../service/friendsService'
import Snackbar from '../../button/SnackBar'
import UserCard from '../user-cards/UserCard'

const RequestsToFriends = ({
   requestToFriend,
   getAllRequests,
   errorFunction,
}) => {
   const navigate = useNavigate()
   const acceptApplicationHandler = async (id) => {
      try {
         await acceptApplicationRequest(id)
         return await getAllRequests()
      } catch (error) {
         return errorFunction(error)
      }
   }
   const rejectApplicationHandler = async (id) => {
      try {
         await rejectApplicationRequest(id)
         return await getAllRequests()
      } catch (error) {
         return errorFunction(error)
      }
   }
   return (
      <>
         <Snackbar />
         <div>
            <Container>
               {requestToFriend?.map((item) => {
                  return (
                     <UserCard
                        key={item.id}
                        id={item.id}
                        fullName={item.fullName}
                        buttons
                        changeFlexContent
                        image={item.image}
                        count={item.countOfHolidays}
                        countOfWish={item.countOfWishes}
                        navigateHandler={() => navigate(`${item.id}/profile`)}
                        acceptHandler={acceptApplicationHandler}
                        rejectHandler={rejectApplicationHandler}
                     />
                  )
               })}
            </Container>
         </div>
      </>
   )
}
const Container = styled('div')`
   margin-top: 24px;
   display: flex;
   flex-wrap: wrap;
   gap: 45px;
`
export default memo(RequestsToFriends)

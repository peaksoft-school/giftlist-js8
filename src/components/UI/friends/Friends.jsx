import { Tabs, styled } from '@mui/material'
import React, { useEffect, useState, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import useToastBar from '../../../hooks/useToastBar'
import {
   getAllFriendsRequest,
   getAllRequestsToFriend,
} from '../../../service/friendsService'
import RequestsToFriends from './RequstsToFriends'
import UserCard from '../user-cards/UserCard'

const Friends = () => {
   const [userData, setUserData] = useState([])
   const [requestFirends, setRequestFriends] = useState([])
   const navigate = useNavigate()
   const { showToast } = useToastBar()
   const errorFunction = (error) => {
      return error
         ? showToast(
              'error',
              'Ошибка',
              'Что-то пошло не так повторите попытку позже'
           )
         : showToast(
              'error',
              'Ошибка',
              'При загрузке данных произошла ошибка! повторите попытку позже'
           )
   }
   const getAllFriends = async () => {
      try {
         const data = await getAllFriendsRequest()
         const users = data.data
         setUserData(users)
         return users
      } catch (error) {
         return errorFunction()
      }
   }
   const getAllRequests = async () => {
      try {
         const data = await getAllRequestsToFriend()
         const users = data.data
         setRequestFriends(users)
         return users
      } catch (error) {
         return errorFunction()
      }
   }

   useEffect(() => {
      getAllFriends()
      getAllRequests()
   }, [])

   const allUsersData = userData || []
   const allrequestToFriend = requestFirends || []
   return (
      <GlobalContainer>
         <Tabs
            followersCount={allUsersData?.length}
            requestsCount={allrequestToFriend?.length}
            requestTab={
               <RequestsToFriends
                  requestToFriend={allrequestToFriend}
                  getAllRequests={getAllRequests}
                  errorFunction={errorFunction}
               />
            }
         >
            <Container>
               {allUsersData?.map((item) => {
                  return (
                     <UserCard
                        key={item.id}
                        id={item.id}
                        fullName={item.fullName}
                        changeFlexContent
                        image={item.image}
                        count={item.countOfHolidays}
                        countOfWish={item.countOfWishes}
                        navigateHandler={() => navigate(`${item.id}/profile`)}
                     />
                  )
               })}
            </Container>
         </Tabs>
      </GlobalContainer>
   )
}
const GlobalContainer = styled('div')`
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
`
const Container = styled('div')`
   margin-top: 24px;
   display: flex;
   flex-wrap: wrap;
   align-items: flex-start;
   gap: 40px;
`
export default memo(Friends)
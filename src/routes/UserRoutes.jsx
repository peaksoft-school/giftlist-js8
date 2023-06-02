import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Lenta from '../containers/user/Lenta'
import WishList from '../containers/user/WishList'
import Booked from '../containers/user/Booked'
import MyHolidays from '../containers/user/MyHolidays'
import UserCharity from '../containers/user/charities/Charity'
import UserLayout from '../layout/user/UserLayout'
import PrivateRoute from '../hoc/withPrivateRoute'
import { INITIAL_PATH, ROLES } from '../utlis/constants/constnats'
import ErrorPage from '../containers/ErrorPage'
import CharityDetails from '../containers/user/charities/CharityDetails'
import AddCharity from '../containers/user/charities/AddCharity'
import Friends from '../containers/user/friends/Friends'
import FriendProfile from '../containers/user/friends/FriendProfile'
import AllCharities from '../containers/admin/users/AllCharities'
import AllGifts from '../containers/admin/users/AllWishes'
import AllHolidays from '../containers/admin/users/AllHolidays'

const UserRoutes = () => {
   return (
      <Routes>
         <Route
            path={INITIAL_PATH.GUEST.main}
            element={<Navigate replace to="/user/lenta" />}
         />
         <Route
            path={INITIAL_PATH.USER.user}
            element={<PrivateRoute component={UserLayout} roles={ROLES.USER} />}
         >
            <Route
               path={INITIAL_PATH.USER.lenta}
               element={<PrivateRoute component={Lenta} roles={ROLES.USER} />}
            />
            <Route
               path={INITIAL_PATH.USER.friends}
               element={<PrivateRoute component={Friends} roles={ROLES.USER} />}
            />
            <Route
               path={INITIAL_PATH.USER.friend_profile}
               element={
                  <PrivateRoute component={FriendProfile} roles={ROLES.USER} />
               }
            />
            <Route
               path={INITIAL_PATH.USER.friend_charity}
               element={
                  <PrivateRoute component={AllCharities} roles={ROLES.USER} />
               }
            />
            <Route
               path={INITIAL_PATH.USER.friend_wishes}
               element={
                  <PrivateRoute component={AllGifts} roles={ROLES.USER} />
               }
            />
            <Route
               path={INITIAL_PATH.USER.friend_holidays}
               element={
                  <PrivateRoute component={AllHolidays} roles={ROLES.USER} />
               }
            />
            <Route
               path={INITIAL_PATH.USER.wishlist}
               element={
                  <PrivateRoute component={WishList} roles={ROLES.USER} />
               }
            />
            <Route
               path={INITIAL_PATH.USER.bookedPage}
               element={<PrivateRoute component={Booked} roles={ROLES.USER} />}
            />
            <Route
               path={INITIAL_PATH.USER.holidays}
               element={
                  <PrivateRoute component={MyHolidays} roles={ROLES.USER} />
               }
            />
            <Route
               path={INITIAL_PATH.USER.charity}
               element={
                  <PrivateRoute component={UserCharity} roles={ROLES.USER} />
               }
            />
            <Route
               path={INITIAL_PATH.USER.charity && INITIAL_PATH.USER.add_charity}
               element={
                  <PrivateRoute component={AddCharity} roles={ROLES.USER} />
               }
            />
            <Route
               path={
                  INITIAL_PATH.USER.charity && INITIAL_PATH.USER.edit_charity
               }
               element={
                  <PrivateRoute component={AddCharity} roles={ROLES.USER} />
               }
            />
            <Route
               path={
                  INITIAL_PATH.USER.charity && INITIAL_PATH.USER.charity_details
               }
               element={
                  <PrivateRoute component={CharityDetails} roles={ROLES.USER} />
               }
            />
         </Route>
         <Route path={INITIAL_PATH.USER.not_found} element={<ErrorPage />} />
      </Routes>
   )
}

export default UserRoutes

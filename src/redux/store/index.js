import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../reducer/auth/authSlice'
import { lentaSlice } from '../lenta/lentaSlice'
import { charitySlice } from '../charities/charitySlice'
import { userSlice } from '../user/userSlice'
import { mailingSlice } from '../newsLetter/mailingSlice'
import { friendSlice } from '../friends/friendSlice'

const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [lentaSlice.name]: lentaSlice.reducer,
      [charitySlice.name]: charitySlice.reducer,
      [userSlice.name]: userSlice.reducer,
      [mailingSlice.name]: mailingSlice.reducer,
      [friendSlice.name]: friendSlice.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false,
      }),
})

export default store

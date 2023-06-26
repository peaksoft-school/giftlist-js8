import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useDebounce } from 'use-debounce'
import SearchInput from '../../../components/UI/search-input/SearchInput'
import { getGlobalSeachThunk } from '../../../redux/globalSeach/globalSeachThunk'
import useToastBar from '../../../hooks/useToastBar'

const GlobalSeach = () => {
   const { showToast } = useToastBar()
   const [inputValue, setInputValue] = useState('')

   const [value] = useDebounce(inputValue, 1000)
   //    console.log(seachData)

   const dispatch = useDispatch()

   const getSeach = () => {
      dispatch(getGlobalSeachThunk({ showToast, keyword: value }))
   }

   useEffect(() => {
      getSeach()
   }, [value])

   const seachChangeHandler = (e) => {
      setInputValue(e.target.value)
   }

   return (
      <div>
         <SearchInput
            value={inputValue}
            inputChangeHandler={seachChangeHandler}
         />
      </div>
   )
}

export default GlobalSeach

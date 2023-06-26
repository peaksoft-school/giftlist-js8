import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useDebounce } from 'use-debounce'
import SearchInput from '../../../components/UI/search-input/SearchInput'
import useToastBar from '../../../hooks/useToastBar'
import { frendsSeachThunk } from '../../../redux/globalSeach/frendsSeach/frendsThunk'

const FrendsSeach = () => {
   const [inputValue, setInputValue] = useState('')
   const { showToast } = useToastBar()

   const [value] = useDebounce(inputValue, 1000)

   const dispatch = useDispatch()

   const getSerach = () => {
      dispatch(frendsSeachThunk({ showToast, keyWord: value }))
   }

   useEffect(() => {
      getSerach()
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

export default FrendsSeach

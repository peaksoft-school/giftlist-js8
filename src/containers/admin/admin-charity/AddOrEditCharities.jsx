import React, { useState } from 'react'
import { styled } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import Snackbar from '../../../components/button/SnackBar'
import AppSelect from '../../../components/UI/AppSelect'
import MyButton from '../../../components/UI/Button'
import Spinner from '../../../components/UI/Spinner'
import { ReactComponent as AddImg } from '../../../assets/svg/charityImgAddIcon.svg'
import {
   categoryArray,
   stateArray,
   subcategoryArray,
} from '../../../utlis/constants/constnats'
import ReusableInput from '../../../components/UI/input/Input'
import EmptyTextarea from '../../../components/UI/textarea/Textarea'
import { saveAdminCharityRequest } from '../../../service/charityAdminService'
import { uploadFileRequest } from '../../../service/charityService'
import useToastBar from '../../../hooks/useToastBar'

const AddAdminCharity = () => {
   const location = useLocation()
   const { oneCharity } = location.state ?? {}
   const [stateValue, setStateValue] = useState(oneCharity?.state || '')
   const [categoryValue, setCategoryValue] = useState(
      oneCharity?.category || ''
   )
   const [subCategoryValue, setSubCategoryValue] = useState(
      oneCharity?.subCategory || ''
   )
   const [titleInputValue, setTitleInputValue] = useState(
      oneCharity?.charityName || ''
   )

   const [descriptionValue, setDescriptionValue] = useState(
      oneCharity?.description || ''
   )
   const [imageUrl, setImageUrl] = useState(oneCharity?.image || '')

   const [selectedFile, setSelectedFile] = useState(null)
   const [isLoading, setIsLoading] = useState(false)
   const navigate = useNavigate()
   const { showToast } = useToastBar()
   const handleImageChange = async (e) => {
      const file = e.target.files[0]
      const formData = new FormData()
      formData.append('file', file)
      setSelectedFile(formData)
      if (file) {
         const reader = new FileReader()
         reader.onload = () => {
            setImageUrl(reader.result)
         }
         reader.readAsDataURL(file)
      }
   }
   const titleInputChangeHandler = (event) =>
      setTitleInputValue(event.target.value)

   const descriptionChangeHandler = (event) =>
      setDescriptionValue(event.target.value)

   const uploadFile = async () => {
      try {
         const response = await uploadFileRequest(selectedFile)
         const fileResponse = response.data.url
         setImageUrl(fileResponse)
         return fileResponse
      } catch (error) {
         return showToast(
            'error',
            'Ошибка',
            'При загрузке файла произошла ошибка повторите попытку позже'
         )
      }
   }
   const saveCharityHandler = async (data) => {
      setIsLoading(true)
      try {
         await saveAdminCharityRequest(data)
         navigate('/admin/charity')
      } catch (error) {
         showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
      } finally {
         setIsLoading(false)
      }
   }
   const subminHandler = async () => {
      const formIsEmpty = Object.values({
         imageUrl,
         titleInputValue,
         categoryValue,
         subCategoryValue,
         stateValue,
         descriptionValue,
      }).some((value) => !value)
      if (formIsEmpty) {
         return showToast('warning', 'Пожалуйста!', 'Заполните все поля')
      }
      const fileResponse = selectedFile && (await uploadFile())
      const data = {
         id: oneCharity.id,
         name: titleInputValue,
         state: stateValue,
         category: categoryValue,
         subCategory: subCategoryValue,
         description: descriptionValue,
         image: fileResponse || imageUrl,
      }
      saveCharityHandler(data)
      return formIsEmpty
   }
   return (
      <>
         <Snackbar />
         <StyledGlobalContainer>
            <StyledImgContainer>
               <div>
                  <StyledImgIconContainer>
                     {(imageUrl && (
                        <label htmlFor="file-input">
                           <StyledImgProfileWidth src={imageUrl} alt="img" />
                        </label>
                     )) || (
                        <StyledImgText htmlFor="file-input">
                           <div>
                              <AddImg />
                              <p> Нажмите для добавления фотографии</p>
                           </div>
                        </StyledImgText>
                     )}
                  </StyledImgIconContainer>

                  <StyledInputOfTypeFile
                     id="file-input"
                     accept="image/*"
                     type="file"
                     placeholder="Нажмите для добавления фотографии"
                     onChange={handleImageChange}
                  />
               </div>
            </StyledImgContainer>

            <StyledInputAndSelctsGlobalContainer>
               <div>
                  <StyledTitle>Добавление вещи</StyledTitle>
               </div>
               <StyledInputAndSelectsContainer>
                  <div>
                     <StyledTitleForSelects>
                        Название подарка
                     </StyledTitleForSelects>
                     <StyledReusebleInput
                        placeholder="Введите название подарка"
                        value={titleInputValue}
                        onChange={titleInputChangeHandler}
                     />
                  </div>
                  <StyledMarginLefts>
                     <StyledSelectContainer>
                        <StyledTitleForSelects>Cостояние</StyledTitleForSelects>
                        <AppSelect
                           background="none"
                           options={stateArray}
                           height="30px"
                           placeholder="Укажите состояние"
                           value={stateValue}
                           setValue={setStateValue}
                        />
                     </StyledSelectContainer>
                  </StyledMarginLefts>
                  <div>
                     <StyledTitleForSelects>Категория</StyledTitleForSelects>
                     <AppSelect
                        background="none"
                        options={categoryArray}
                        height="30px"
                        placeholder="Выберите категорию"
                        value={categoryValue}
                        setValue={setCategoryValue}
                     />
                  </div>
                  <StyledMarginLefts>
                     <StyledTitleForSelects>Подкатегория</StyledTitleForSelects>
                     <AppSelect
                        background="none"
                        options={subcategoryArray}
                        height="30px"
                        placeholder="Выберите подкатегорию"
                        value={subCategoryValue}
                        setValue={setSubCategoryValue}
                     />
                  </StyledMarginLefts>
               </StyledInputAndSelectsContainer>
               <div>
                  <StyledDescription>Описание</StyledDescription>
                  <EmptyTextarea
                     value={descriptionValue}
                     onChange={descriptionChangeHandler}
                     title="Введите описание подарка"
                     rows="4"
                  />
               </div>
               <StyledButtonContainer>
                  <MyButton
                     variant="outlined"
                     background="#ffffff"
                     defaultcolor="#8D949E"
                     propswidth="113px"
                     outlinedbordercolor="#8D949E"
                     propsborderradius="10px"
                     onClick={() => navigate(-1)}
                  >
                     Отмена
                  </MyButton>
                  <MyButton
                     variant="contained"
                     propswidth="113px"
                     background="#8639B5"
                     defaultcolor="#ffffff"
                     hoverbackgroundcolor="#612386"
                     activebackgroundcolor="#AB62D8"
                     propsborderradius="10px"
                     onClick={subminHandler}
                  >
                     {isLoading ? <Spinner /> : 'Cохранить'}
                  </MyButton>
               </StyledButtonContainer>
            </StyledInputAndSelctsGlobalContainer>
         </StyledGlobalContainer>
      </>
   )
}

export default AddAdminCharity

const StyledReusebleInput = styled(ReusableInput)`
   width: 396px;
`
const StyledSelectContainer = styled('div')`
   margin-top: -10px;
`
const StyledButtonContainer = styled('div')`
   width: 260px;
   display: flex;
   justify-content: space-between;
   margin-top: 57px;
   margin-left: 548px;
`
const StyledImgProfileWidth = styled('img')`
   width: 217px;
   height: 217px;
   border-radius: 8px;
`
const StyledTitle = styled('h2')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 22px;
   display: flex;
   align-items: center;
   letter-spacing: 0.2px;
   color: #020202;
   margin-bottom: 20px;
`
const StyledTitleForSelects = styled('p')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 12px;
   line-height: 15px;
   display: flex;
   align-items: center;
   color: #464444;
   margin: 0;
   padding: 0;
`
const StyledDescription = styled('h3')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 12px;
   line-height: 15px;
   display: flex;
   align-items: center;
   color: #464444;
   margin-left: 10px;
   padding: 0;
`
const StyledMarginLefts = styled('div')`
   margin-left: 16px;
`

const StyledGlobalContainer = styled('div')`
   display: flex;
   margin-top: 88px;
`
const StyledInputAndSelctsGlobalContainer = styled('div')`
   margin-left: 20px;
`
const StyledInputAndSelectsContainer = styled('div')`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 825px;
   flex-wrap: wrap;
   margin-bottom: 20px;
`

const StyledImgContainer = styled('div')`
   width: 217px;
   height: 217px;
   background: #f6f6f9;
   border: 1px solid #dcdce4;
   border-radius: 8px;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
`

const StyledImgIconContainer = styled('div')`
   text-align: center;
   cursor: pointer;
`

const StyledImgText = styled('label')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 12px;
   line-height: 16px;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 16px;
   color: #8e8ea9;
   cursor: pointer;
   position: relative;
   z-index: 3;
`
const StyledInputOfTypeFile = styled('input')`
   display: none;
`
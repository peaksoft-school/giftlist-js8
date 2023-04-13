import Modal from '@mui/material/Modal'
import { styled } from '@mui/material'

const MyModal = ({ children, onClose, open, ...rest }) => {
   return (
      <Modal open={open} onClose={onClose} {...rest}>
         <StyledBox>{children}</StyledBox>
      </Modal>
   )
}

export default MyModal

const StyledBox = styled('div')({
   position: 'absolute',
   top: '50%',
   zIndex: '10',
   border: 'none',
   backgroundColor: '#fff',
   left: '50%',
   transform: 'translate(-50%, -50%)',
})

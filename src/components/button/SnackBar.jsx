import { Alert, Button, Snackbar } from '@mui/material'
import React from 'react'

const SnackBar = () => {
   const [open, setOpen] = React.useState(false)

   const handleClick = () => {
      setOpen(true)
   }

   const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
         return
      }

      setOpen(false)
   }
   return (
      <div>
         <Button> open </Button>
         <Button variant="outlined" onClick={handleClick}>
            Open success snackbar
         </Button>
         <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
               onClose={handleClose}
               severity="success"
               sx={{ width: '100%' }}
            >
               <p> Спасибо что сообщили нам об этом !</p>
            </Alert>
         </Snackbar>
         <Alert severity="error" sx={{ color: 'red' }}>
            Ошибка{' '}
            <Button sx={{ color: 'black', width: '100%', font: 'Inter' }}>
               {' '}
               Текст сообщения
            </Button>
         </Alert>
         <Alert severity="success">Текст сообщения</Alert>
         <Alert severity="info">Текст сообщения</Alert>
         <Alert severity="warning">Текст сообщения</Alert>
      </div>
   )
}

export default SnackBar

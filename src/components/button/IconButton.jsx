import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

const IconButton = styled(Button)({
   color: 'black',
   backgroundColor: 'white',
})

function MyIconButton(props) {
   return <IconButton {...props} />
}

export default MyIconButton

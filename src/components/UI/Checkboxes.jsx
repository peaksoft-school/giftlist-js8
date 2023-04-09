import * as React from 'react'
import Checkbox from '@mui/material/Checkbox'
import { styled } from '@mui/material'

const StyledCheckbox = styled(Checkbox)(() => ({
   color: '#8639B5;',
   '&.Mui-checked': {
      color: '#8639B5;',
   },
}))

export function Checkboxes() {
   return (
      <div>
         <StyledCheckbox />
      </div>
   )
}

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';

// export default function ButtonSizes() {
//   return (
//     <Box sx={{ '& button': { m: 1 } }}>
//       <div>
//         <Button size="small">Войти</Button>
//         <Button size="medium"> Добавить подарок</Button>
//         <Button size="large">Отмена</Button>
//       </div>
//       <div>
//         <Button variant="outlined" size="small">
//           Войти
//         </Button>
//         <Button variant="outlined" size="medium">
//           Добавить подарок
//         </Button>
//         <Button variant="outlined" size="large">
//           Отмена
//         </Button>
//       </div>
//       <div>
//         <Button variant="contained" size="small">
//           Войти
//         </Button>
//         <Button variant="contained" size="medium">
//           Добавить подарок
//         </Button>
//         <Button variant="contained" size="large">
//           Отмена
//         </Button>
//       </div>
//     </Box>
//   );
// }

// import React, { useState } from 'react';
// import Button from '@mui/material/Button';
// import { withStyles } from '@mui/material/styles';

// type Props = {
//   onClick: () => void;
//   handleClick: () => void;
// };
// // type color = {
// //   onClick: () => void;
// // };
// function ColorButton(props: Props) {
//   const [color, setColor] = useState(props.color);
//   const styles = {
//     button: {
//       borderRadius: 20,
//       padding: '10px 20px',
//       fontWeight: 'bold',
//       fontSize: 16
//     }
//   };
//   function handleClick() {
//     setColor(color === props.color ? props.newColor : props.color);
//     if (props.onClick) {
//       props.onClick();
//     }
//   }

//   return (
//     <Button variant={props.variant} color={color} onClick={handleClick} className={props.className}>
//       {props.label}
//     </Button>
//   );
// }
// // export default ColorButton;
// export default withStyles(styles)(ColorButton);
// import React, { useState } from 'react'
// import Button from '@mui/material/Button'
// import { withStyles } from '@mui/material/styles'

// const styles = {
//    button: {
//       borderRadius: 20,
//       padding: '10px 20px',
//       fontWeight: 'bold',
//       fontSize: 16,
//    },
// }

// function ColorButton(props) {
//    const [color, setColor] = useState(props.color)

//    function handleClick() {
//       setColor(color === props.color ? props.newColor : props.color)
//       if (props.onClick) {
//          props.onClick()
//       }
//    }

//    return (
//       <Button
//          variant={props.variant}
//          color={color}
//          onClick={handleClick}
//          className={props.classes.button}
//       >
//          {props.label}
//       </Button>
//    )
// }

// export default withStyles(styles)(ColorButton)

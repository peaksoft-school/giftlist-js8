import * as React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import styled from '@emotion/styled'
import Meatballs from '../UI/Meatballs'
import { useMeatballs } from '../../hooks/useMeatballs'

const AdminCard = ({
   dataCategory,
   DATA_WISHLIST,
   DATA_HOLIDAYS,
   DATA_CHARITY,
   MEATBALLS_CONTENT,
}) => {
   const { handleClick, handleClose, open, anchorEl } = useMeatballs()

   let data
   switch (dataCategory) {
      case 'wishlist':
         data = DATA_WISHLIST
         break
      case 'holidays':
         data = DATA_HOLIDAYS
         break
      case 'charity':
         data = DATA_CHARITY
         break
      default:
         data = DATA_WISHLIST
   }

   return (
      <StyledCard>
         {data.map((item) => (
            <div key={item.id}>
               <CardMedia
                  component="img"
                  height="149"
                  image={item.img}
                  alt="card img"
               />

               <StyledCardContent>
                  <Title>{item.title}</Title>
                  <StyledBirthDate>{item.birthDate}</StyledBirthDate>
                  <StyledStatus>{item.status}</StyledStatus>
               </StyledCardContent>

               <StyledCardActions>
                  {item.date}
                  <StyledExpectation>{item.expectation}</StyledExpectation>
                  <Meatballs
                     arrayIcon={MEATBALLS_CONTENT}
                     handleClick={handleClick}
                     handleClose={handleClose}
                     open={open}
                     anchorEl={anchorEl}
                  />
               </StyledCardActions>
            </div>
         ))}
      </StyledCard>
   )
}

export default AdminCard

const StyledCard = styled(Card)`
   padding: 16px;
   background: #ffffff;
   border: 1px solid #ffffff;
   border-radius: 8px;
   width: 349px;
   margin: 2rem;
`

const StyledCardContent = styled(CardContent)(
   `
    padding: 16px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;    
  `
)

const Title = styled.div`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 600;
   font-size: 14px;
   line-height: 130%;
   color: #000000;
`

const StyledBirthDate = styled.div`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 13px;
   line-height: 16px;
   color: #0ba360;
   padding-left: 86px;
`

const StyledCardActions = styled(CardActions)(
   `
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #636C84;
    padding: 0;
  `
)

const StyledExpectation = styled.div`
   margin-left: 115px;
   padding: 0;
`

const StyledStatus = styled.div`
   font-weight: 500;
   font-size: 14px;
   color: #fd5200;
`

import React from 'react'

import { Box, Button, styled } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';


const LeftContainer = styled(Box)`
min-width:40%;
padding: 34px 0 0 15px;
margin-right:2rem;
`

const Image = styled('img')({
    padding: '15px',
    width: '90%',
    height: 'auto',
})

const ButtonContainer = styled(Box)`
display:flex;
justify-content:space-between;
align-items:center;

`
const StyledButton = styled(Button)`
width:49%;
height:45px;
margin-top:10px;
border-radius:0px;
`

const ActionItems = ({ product }) => {
    return (
        <>
            < LeftContainer >
                <Box
                    style={{ padding: '10px 20px', border: '2px solid #f0f0f0' }}
                >
                    <Image src={product.detailUrl} alt="Product Image" />
                </Box>

                <ButtonContainer >
                    <StyledButton
                        variant='contained'
                        style={{ background: '#FF9F00', fontWeight: 600 }}
                    > <ShoppingCartIcon />&nbsp;Add To Cart
                    </StyledButton>

                    <StyledButton
                        variant='contained'
                        style={{ background: '#FB641B', fontWeight: 600 }}
                    > <FlashOnIcon /> &nbsp; Buy Now
                    </StyledButton>
                </ButtonContainer>
            </LeftContainer >
        </>
    )
}

export default ActionItems
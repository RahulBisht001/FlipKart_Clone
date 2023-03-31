import React from 'react'

import { Box, Button, Typography, styled } from '@mui/material'
import ShoppingCart from '@mui/icons-material/ShoppingCart';

// custom css for Material UI icons

const Wrapper = styled(Box)`
display:flex;
align-items:center;

&> button,&> p,&> div{
margin-right:40px;
}
`

const LoginButton = styled(Button)`
color:#2874f0;
background:#fff;
text-transform:none;
border-radius:4;
padding: 5px 30px;
&:hover{
    background:#fff;
}
`

const Container = styled(Box)`
display:flex;
`


const CustomButtons = () => {
    return (
        <Wrapper>
            <LoginButton variant='contained'>Login</LoginButton>
            <Typography>Become a Seller</Typography>
            <Typography>More</Typography>

            <Container>
                <ShoppingCart />
                <Typography>
                    &nbsp;Cart
                </Typography>
            </Container>
        </Wrapper>
    )
}

export default CustomButtons
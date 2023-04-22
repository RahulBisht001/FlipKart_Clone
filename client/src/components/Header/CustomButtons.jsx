import React from 'react'
import { useState, useContext } from 'react';

import { Box, Button, Typography, styled } from '@mui/material'
import ShoppingCart from '@mui/icons-material/ShoppingCart';


import { DataContext } from '../../context/DataProvider';

// internal import of components
import LoginDialog from '../Login/LoginDialog';
import Profile from './Profile';

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

    const [open, setOpen] = useState(false)
    const { account, setAccount } = useContext(DataContext)

    const openDialog = () => {
        setOpen(true)
    }

    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount} />
                    : <LoginButton
                        variant='contained'
                        onClick={openDialog}
                    >Login
                    </LoginButton>

            }

            <Typography>Become a Seller</Typography>
            <Typography>More</Typography>

            <Container>
                <ShoppingCart />
                <Typography>
                    &nbsp;Cart
                </Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    )
}

export default CustomButtons
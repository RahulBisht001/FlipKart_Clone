import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import { navData } from '../../constants/data'


const NavComponent = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '50px 15px 0 15px!important',
    overflowX: 'overlay',
    [theme.breakpoints.down('lg')]: {
        margin: '0px !important'
    }
}))

const NavContainer = styled(Box)`
padding:12px 8px;
text-align:center
`

const Text = styled(Typography)`
font-size:14px;
font-weight:600;
font-family:inherit;
`


const NavBar = () => {
    return (
        <NavComponent>
            {
                navData.map((data) => (
                    <NavContainer>
                        <img src={data.url} alt="navItem" style={{ width: 64 }} />
                        <Text>{data.text}</Text>
                    </NavContainer>
                ))
            }
        </NavComponent>
    )
}

export default NavBar
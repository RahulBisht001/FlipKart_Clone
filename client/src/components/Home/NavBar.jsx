import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import { navData } from '../../constants/data'


const NavComponent = styled(Box)`
display:flex;
justify-content:space-between;
margin:55px 130px 0 130px;

`
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
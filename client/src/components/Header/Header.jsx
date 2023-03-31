import React from 'react'

import { AppBar, Toolbar, Box, styled } from '@mui/material'

const StyledHeader = styled(AppBar)`
background:#2874f0;
`

const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';


const Header = () => {
    return (
        <>
            <StyledHeader>
                <Toolbar>
                    <Box>
                        <img src={logoURL} alt="Flipkart Logo" />
                    </Box>
                </Toolbar>
            </StyledHeader>
        </>
    )
}

export default Header
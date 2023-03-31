import React from 'react'

import { AppBar, Toolbar, Box, Typography, styled } from '@mui/material'
import Search from './Search'
import CustomButtons from './CustomButtons'


// Custom css for material UI Components
const StyledHeader = styled(AppBar)`
background:#2874f0;
height:55px
`

const CustomBox = styled(Box)`
margin-left:12%;
line-height:0;

`

const SubHeading = styled(Typography)`
font-size:12px;
font-style:italic;
`

const PlusImg = styled('img')({
    width: 12,
    height: 12,
    marginLeft: 4
})

const CustomButtonWrapper = styled(Box)`
margin:0 3% 0 auto;
`




const Header = () => {

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return (
        <>
            <StyledHeader>
                <Toolbar style={{ minHeight: 55 }}>
                    <CustomBox>
                        <img src={logoURL} alt="Flipkart Logo"
                            style={{ width: 80 }}
                        />
                        <Box style={{ display: "flex" }}>
                            <SubHeading>
                                Explore &nbsp;
                                <Box component="span" style={{ color: 'yellow', fontWeight: "bold" }}>Plus</Box>
                            </SubHeading>
                            <PlusImg src={subURL} alt="" />
                        </Box>
                    </CustomBox>

                    {/* Component Import */}
                    <Search />

                    <CustomButtonWrapper>
                        {/* Component Import */}
                        <CustomButtons />
                    </CustomButtonWrapper>

                </Toolbar>
            </StyledHeader>
        </>
    )
}

export default Header
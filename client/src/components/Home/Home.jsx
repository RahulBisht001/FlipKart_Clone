import React from 'react'

import { Box, styled } from '@mui/material'


import NavBar from './NavBar'
import Banner from './Banner'


const Component = styled(Box)`
padding:10px;
background:#f1f3f6;
`



const Home = () => {
    return (
        <>
            <NavBar />
            <Component>
                <Banner />
            </Component>
        </>
    )
}

export default Home
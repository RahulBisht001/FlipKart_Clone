import React from 'react'

import Slide from './Slide'
import { Box, styled } from '@mui/material'


const Component = styled(Box)`
display:flex;
`

const LeftComponent = styled(Box)(({ theme }) => ({
    width: '80%',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
}))


const RightComponent = styled(Box)(({ theme }) => ({
    marginTop: 19,
    marginLeft: 10,
    background: '#FFFFFF',
    width: '20%',
    padding: 5,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const MidSlide = ({ products, title, timer }) => {

    const adURL = 'https://rukminim1.flixcart.com/fk-p-flap/464/708/image/b958556899460608.jpg?q=70';

    return (
        <Component>
            <LeftComponent>
                <Slide
                    products={products}
                    title={title}
                    timer={timer}
                />
            </LeftComponent>
            <RightComponent>
                <img
                    src={adURL}
                    alt="advertisement"
                    style={{ width: '100%', height: '100%' }}
                />
            </RightComponent>
        </Component>
    )
}

export default MidSlide
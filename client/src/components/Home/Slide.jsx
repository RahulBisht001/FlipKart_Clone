import React from 'react'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';

import Countdown from 'react-countdown';

import { Box, Typography, Button, Divider, styled } from '@mui/material'



const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
}


const Component = styled(Box)`
margin-top:20px;
background:#ffffff;
`

const Deal = styled(Box)`
padding: 15px 20px;
display:flex;
align-items:center;
`

const DealText = styled(Typography)`
font-size:18px;
font-weight:600;
margin-right:25px;
line-height:30px;
`

const Timer = styled(Box)`
display:flex;
align-items:center;
margin-left:10px;
color:#7f7f7f;
&>img{
    height:30px;
}
`
const ViewAllButton = styled(Button)`
margin-left:auto;
background-color:#2874f0;
font-size:12px;
font-weight:600;
letter-spacing:.2ch;
`

const Image = styled('img')({
    width: 'auto',
    height: 180,
    '&:hover': {
        scale: 1.1
    },
})

const Text = styled(Typography)`
font-size:14px;
margin-top:5px;
`


const Slide = ({ products, title, timer }) => {

    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({ hours, minutes, seconds }) => {
        return <Box variant="span">{hours}:{minutes}:{seconds} Left</Box>
    };


    return (
        <>
            <Component>
                <Deal>
                    <DealText>
                        {title}
                    </DealText>
                    {timer &&
                        <Timer>
                            <Image src={timerURL} alt="" />
                            <Countdown
                                date={Date.now() + 4.32e+7}
                                renderer={renderer}
                            />
                        </Timer>
                    }
                    <ViewAllButton
                        variant='contained'
                        color='primary'
                    >
                        view all
                    </ViewAllButton>
                </Deal>

                <Divider />

                <Carousel
                    responsive={responsive}
                    swipeable={false}
                    draggable={false}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    centerMode={true}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    containerClass="carousel-container"
                >
                    {
                        products.map(product => (
                            <Box
                                textAlign="center"
                                style={{ padding: "10px 10px", margin: "10px" }}
                            >
                                <Image
                                    src={product.url}
                                />
                                <Text
                                    style={{ fontWeight: 600, color: '#212125' }}
                                >
                                    {product.title.shortTitle}
                                </Text>

                                <Text
                                    style={{ color: 'green' }}
                                >
                                    {product.discount}
                                </Text>

                                <Text
                                    style={{ color: '#212121', opacity: '.7', fontSize: '13px' }}
                                >
                                    {product.tagline}
                                </Text>
                            </Box>
                        ))
                    }
                </Carousel>
            </Component>
        </>
    )
}

export default Slide
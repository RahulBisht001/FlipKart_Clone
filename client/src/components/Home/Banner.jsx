import React from 'react'

import { styled } from "@mui/material"
import { bannerData } from '../../constants/data'

import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";


const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const Image = styled('img')({
    width: '100%',
    height: 280
})



const Banner = () => {
    return (
        <>
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                showDots={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                slidesToSlide={1}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >
                {
                    bannerData.map((data) => (
                        <Image src={data.url} alt="bannerImg" />
                    ))
                }
            </Carousel>
        </>
    )
}

export default Banner
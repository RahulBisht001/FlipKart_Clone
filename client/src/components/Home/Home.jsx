import React from 'react'
import { useEffect } from 'react'

import { Box, styled } from '@mui/material'


import NavBar from './NavBar'
import Banner from './Banner'
import Slide from './Slide'
import MidSlide from './MidSlide'
import MidSection from './MidSection'

import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/actions/productAction'


const Component = styled(Box)`
padding:10px;
background:#f1f3f6;
`



const Home = () => {

    //todo   this getProduct is a redux state defined inside Store.js

    const { products } = useSelector(state => state.getProducts)
    console.log("Products are")
    console.log(products)
    const dispatch = useDispatch()

    useEffect(() => {

        //todo     this getProducts is a function defined inside productAction.js
        dispatch(getProducts())
    }, [dispatch]) 

    return (
        <>
            <NavBar />
            <Component>
                <Banner />
                <MidSlide products={products} title={"Deal of The day"} timer={true} />
                <MidSection />
                <Slide products={products} title={"Discounts for you"} timer={false} />
                <Slide products={products} title={"Suggested Items"} timer={false} />
                <Slide products={products} title={"Recommended for you"} timer={false} />
                <Slide products={products} title={"Top Selections"} timer={false} />
                <Slide products={products} title={"Trending offers"} timer={false} />
                <Slide products={products} title={"Season's Top Picks"} timer={false} />
                <Slide products={products} title={"Top Deals on accessories"} timer={false} />
            </Component>
        </>
    )
}

export default Home
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import ProductDetail from './ProductDetail'
import ActionItems from './ActionItems'

import { getProductDetails } from '../../redux/actions/productAction'


import { Box, Grid, styled } from '@mui/material'



const Component = styled(Box)`
background:#f2f2f9;
margin:0 2% ;
`
const GridContainer = styled(Grid)`
background:#ffffff;
display:flex;
`
const RightContainer = styled(Grid)`
margin-top:50px;
`



const Detailview = () => {

    const dispatch = useDispatch()
    const { id } = useParams()

    const { loading, product } = useSelector(state => state.getProductDetails)

    console.log(product)
    useEffect(() => {
        if (product && id !== product._id)
            dispatch(getProductDetails(id))
    }, [dispatch, id, loading, product])


    return (
        <>
            <Component>
                {
                    product && Object.keys(product).length &&
                    <GridContainer container spacing={2}>
                        <Grid item lg={5} md={4} sm={8} xs={12}>
                            <ActionItems product={product} />
                        </Grid>
                        <RightContainer item lg={7} md={8} sm={8} xs={12}>
                            <ProductDetail product={product} />
                        </RightContainer>
                    </GridContainer>
                }
            </Component>
        </>
    )
}

export default Detailview
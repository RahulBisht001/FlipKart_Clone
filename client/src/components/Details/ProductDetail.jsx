import React from 'react'


import { Box, Typography, Table, TableBody, TableRow, TableCell, styled } from '@mui/material'
import { LocalOffer as Badge } from '@mui/icons-material';



const SmallText = styled(Box)`
vertical-align:baseline;
align-items:center;
& > p{
    font-size:14px;
    margin-top:10px;
    display:flex;
}
`
const StyledBadge = styled(Badge)`

margin-right:10px;
color:#14BE47;
font-size:20px;
`
const ColumnText = styled(TableRow)`
font-size:14px;
vertical-align:baseline;
margin-top:20px;
& >td:{
font-size:14px;
}
`



const ProductDetail = ({ product }) => {


    const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000)

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';



    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography
                style={{ marginTop: 5, fontSize: 14, color: '#878787' }}
            >
                8 Ratings & 2 Reviews
                <Box component={'span'}>
                    <img
                        src={fassured}
                        alt="FlipKart Assured"
                        style={{ width: '8%', marginLeft: '20' }}
                    />
                </Box>
            </Typography>
            <Typography>
                <Box
                    component={'span'}
                    style={{ fontSize: 25 }}
                >
                    ₹{product.price.cost}
                </Box>&nbsp;&nbsp;&nbsp;
                <Box component={'span'} style={{ color: '#878787' }} >
                    <strike>₹{product.price.mrp}</strike>
                </Box>&nbsp;&nbsp;&nbsp;
                <Box component={'span'} style={{ color: '#388E3C' }}>
                    {product.price.discount}
                </Box>
            </Typography>
            <Typography>Available Offers</Typography>
            <SmallText>
                <Typography><StyledBadge />&nbsp;Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</Typography>
                <Typography><StyledBadge />&nbsp;Buy this product and Get Extra ₹50 Off on Select FansT&C</Typography>
                <Typography><StyledBadge />&nbsp;Partner OfferEMI Offer: Sign-up for Flipkart Pay Later & Get ₹500* Flipkart Gift Voucher on EMI TxnKnow More</Typography>
                <Typography><StyledBadge />&nbsp;Special PriceGet extra 19% off (price inclusive of cashback/coupon)T&C</Typography>

            </SmallText>

            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell>Delivery</TableCell>
                        <TableCell
                            style={{ fontWeight: 600 }}
                        >Deliver By:&nbsp;  {date.toDateString()}&nbsp; | ₹ 40 Delivery Charges Extra
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                            <span style={{ color: '#2874f0' }}>OmniTechRetail</span>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting from ₹329</Typography>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell colSpan={2}>
                            <img src={adURL} alt="ad" style={{ width: 390 }} />
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetail
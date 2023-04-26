import React from 'react'

import { Grid, styled } from '@mui/material'
import { imageURL } from '../../constants/data'

const Wrapper = styled(Grid)`
margin-top:10px;
`


const MidSection = () => {
    return (
        <Wrapper lg={12} md={12} sm={12} container>
            {
                imageURL.map(image => (
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <img
                            src={image}
                            alt="adImage"
                            style={{ width: '100%' }}
                        />
                    </Grid>
                ))
            }
        </Wrapper>
    )
}

export default MidSection
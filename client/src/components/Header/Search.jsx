import React from 'react'

import { InputBase, Box, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';


const SearchContainer = styled(Box)`
background:#fff;
border-radius:4px;
width:35%;
margin-left:15px;
display:flex;
`

const InputSearchBase = styled(InputBase)`
width:100%;
padding-left:15px;
font-size:unset;
`
const SearchIconWrapper = styled(Box)`
color:#2874f0;
padding:5px;
display:flex;
align-items:center;
`





const Search = () => {
    return (
        <>
            <SearchContainer>
                <InputSearchBase
                    placeholder='Search for products, brand and more'
                />
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
            </SearchContainer>
        </>
    )
}

export default Search
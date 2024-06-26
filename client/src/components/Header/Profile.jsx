import React from 'react'
import { useState } from 'react'


import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Box, Typography, styled } from '@mui/material'


import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


const Component = styled(Menu)`
margin-top:5px;
`

const Logout = styled(Typography)`
margin-left:15px;
font-size:14px;
`



const Profile = ({ account, setAccount }) => {

    const [open, setOpen] = useState(false)

    const handleClick = (event) => {
        setOpen(event.currentTarget)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const logoutUser = () => {
        setAccount('')
    }

    return (
        <>
            <Box onClick={handleClick}>
                <Typography
                    style={{
                        marginTop: 3,
                        cursor: 'pointer'
                    }}
                >
                    {account}
                </Typography>
            </Box >
            <Component
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => {
                    handleClose()
                    logoutUser()
                }
                }>
                    <PowerSettingsNewIcon
                        color='primary'
                        fontSize='small'
                    />
                    <Logout>
                        Logout
                    </Logout>
                </MenuItem>
            </Component>
        </>
    )
}

export default Profile
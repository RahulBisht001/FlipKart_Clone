import React from 'react'
import { useState, useContext } from 'react'

// API Calls
import { authenticateLogin, authenticateSignup } from '../../service/api'

// material UI components
import { Dialog, Box, TextField, Typography, Button, styled } from '@mui/material'

import { DataContext } from '../../context/DataProvider'



const Component = styled(Box)`
height:75vh;
width:98vh;
padding: 0;
`

const Image = styled(Box)`
background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
no-repeat center 80%;
height:81%;
width:25%;
padding: 40px 30px;
 & > p, & > h5 {
    color: #FFFFFF;
 }
`

const Wrapper = styled(Box)`
display:flex;
flex-direction:column;
padding:25px 30px;
flex:1;
& > div, &>button , &>p{
    margin-top:10px;
}
`

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;


const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color:#2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 1px rgb(0,0,0, 25%)
`;

const Text = styled(Typography)`
font-size:12px;
color:#878787;
`

const CreateAccount = styled(Typography)`
font-size:14px;
text-align:center;
color:#2874f0;
cursor:pointer;
`

const Error = styled(Typography)`
font-size:10px;
font-weight:600;
color:#FF0000;
line-height:0;
margin-top:10px

`




const LoginDialog = ({ open, setOpen }) => {

    const loginInitialValues = {
        username: '',
        password: ''
    }

    const signupInitialValues = {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        phone: '',
    }

    const accountInitialValues = {
        login: {
            view: "login",
            heading: 'Login',
            subHeading: 'Get access to your Orders, Wishlist and Recommendations'
        },
        signUp: {
            view: "signup",
            heading: "Looks like you're new here",
            subHeading: 'Signup to get started'
        }
    }

    // states
    const [account, toggleAccount] = useState(accountInitialValues.login)
    const [signup, setSignup] = useState(signupInitialValues)
    const [login, setLogin] = useState(loginInitialValues)
    const [error, setError] = useState(false)


    const { setAccount } = useContext(DataContext)

    const handleClose = () => {
        setOpen(false)
        toggleAccount(accountInitialValues.login)
        setError(false)
    }
    const toggleSignUp = () => {
        toggleAccount(accountInitialValues.signUp)
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value })
        // console.log(signup)
    }

    const signupUser = async () => {
        const response = await authenticateSignup(signup)
        // console.log("This is response" + response)
        if (!response) {
            console.log('Nothing found')
            return
        }
        handleClose()
        setAccount(signup.firstname)
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    const loginUser = async () => {

        const response = await authenticateLogin(login)
        console.log(response)
        if (response.status === 200) {
            handleClose()
            setAccount(response.data.data.firstname)
        }
        else {
            setError(true)
        }
    }


    return (
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
                sx: {
                    maxWidth: 'unset'
                }
            }}
        >
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image>
                        <Typography variant='h5'>{account.heading}</Typography>
                        <Typography >
                            {account.subHeading}
                        </Typography>

                    </Image>
                    {account.view === 'login' ?
                        <Wrapper>
                            <TextField
                                variant='standard'
                                label='Enter UserName'
                                name='username'
                                onChange={(e) => onValueChange(e)}
                            />
                            {
                                error &&
                                <Error>
                                    Please Enter Valid UserName or Password
                                </Error>
                            }

                            <TextField
                                variant='standard'
                                label='Enter Your Password'
                                name='password'
                                onChange={(e) => onValueChange(e)}
                            />
                            <Text >By Continuing ,You agree to FlipKart's Terms of use and privacy policy </Text>
                            <LoginButton
                                onClick={() => { loginUser() }}
                            >
                                Login
                            </LoginButton>
                            <Typography style={{ textAlign: 'center' }}>OR</Typography>
                            <RequestOTP>Request OTP</RequestOTP>
                            <CreateAccount onClick={() => { toggleSignUp() }}>New to Flipkart? Create an account</CreateAccount>
                        </Wrapper>
                        :
                        <Wrapper>
                            <TextField variant='standard' label='Enter FirstName'
                                onChange={(e) => onInputChange(e)}
                                name='firstname'
                            />
                            <TextField variant='standard' label='Enter LastName'
                                onChange={(e) => onInputChange(e)}
                                name='lastname'
                            />
                            <TextField variant='standard' label='Enter UserName'
                                onChange={(e) => onInputChange(e)}
                                name='username'
                            />
                            <TextField variant='standard' label='Enter Email'
                                onChange={(e) => onInputChange(e)}
                                name='email'
                            />
                            <TextField variant='standard' label='Enter Password'
                                onChange={(e) => onInputChange(e)}
                                name='password'
                            />
                            <TextField variant='standard' label='Enter Phone No.'
                                onChange={(e) => onInputChange(e)}
                                name='phone'
                            />
                            <LoginButton onClick={() => signupUser()}>
                                Continue
                            </LoginButton>
                        </Wrapper>
                    }
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog
import axios from 'axios'

const URL = 'http://localhost:8000'

export const authenticateSignup = async (data) => {
    try {
        console.log(data)
        return await axios.post(`${URL}/signup`, data)
    }
    catch (err) {
        console.log('Error occured while authenticating signup')
        console.log(err)
    }
}


export const authenticateLogin = async (data) => {
    try {
        console.log(data)
        return await axios.post(`${URL}/login`, data)
    }
    catch (err) {
        console.log('Error occured while authenticating login')
        console.log(err)
        return err.response
    }
}
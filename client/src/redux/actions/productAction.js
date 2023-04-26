import axios from "axios"
import * as actionType from '../constants/productConstant'

const URL = 'http://localhost:8000'

export const getProducts = () => async (dispatch) => {

    try {
        const { data } = await axios.get(`${URL}/products`)
        console.log(data)
        dispatch({ type: actionType.GET_PRODUCT_SUCCESS, payload: data })

    } catch (err) {
        dispatch({ type: actionType.GET_PRODUCT_FAIL, payload: err.message })
        console.log("Error while Calling getProducts from ProductAction.js")
        console.log(err)
    }
}
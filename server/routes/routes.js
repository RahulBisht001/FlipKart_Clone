/* This is ES6 syntax 
 you need to add below line in the package.json file so
 that your App can know that you using ES6 syntax
 "type": "module",
*/
import express from 'express'
const router = express.Router()

import { userSignup, userLogin } from '../controller/user-controller.js'
import { getProducts, getProductById } from '../controller/product-controller.js'

router.get('/', (req, res) => {
    res.send('<h1>HI Rahul</h1>')
})

router.post('/signup', userSignup)

router.post('/login', userLogin)

router.get('/products', getProducts)

router.get('/product/:id', getProductById)

export default router
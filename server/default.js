import { products } from './constants/data.js'

import Product from './model/product-schema.js'

const DefaultData = async () => {
    try {
        await Product.insertMany(products)
        console.log('Data Inserted in DataBase Successfully')
    } catch (err) {
        console.log("ERROR While Inserting Data")
        console.log(err.message)
    }
}

export default DefaultData
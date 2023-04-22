import { products } from './constants/data.js'

import Product from './model/product-schema.js'

const DefaultData = async () => {
    try {
        const count = await Product.countDocuments()
        if (count === 0) {
            await Product.insertMany(products)
            console.log('Data Inserted in DataBase Successfully')
        }
        else
            console.log('Data Already Inserted in the DataBase')
    } catch (err) {
        console.log("ERROR While Inserting Data")
        console.log(err.message)
    }
}

export default DefaultData
import Product from '../model/product-schema.js'

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find()

        if (!products) {
            throw new Error("Products Collection is Empty")
        }
        return res.status(200).json(products)

    } catch (err) {
        res.status(500).send("Error in productController --> getProducts")
        console.log("Error in productController --> getProducts")
        console.log(err)
    }
}

export const getProductById = async (req, res) => {

    // console.log("req params are")
    // console.log(req.params)
    const id = req.params.id
    try {

        //! I am Using _id because i have used same _id key in the client
        const product = await Product.findOne({ '_id': id })
        if (!product) {
            throw new Error("Product Object  is Empty")
        }
        return res.status(200).json(product)
    } catch (err) {
        res.status(500).send("Error in productController --> getProductById")
        console.log("Error in productController --> getProductById")
        console.log(err)
    }
}
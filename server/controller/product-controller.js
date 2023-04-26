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
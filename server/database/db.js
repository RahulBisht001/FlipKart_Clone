import mongoose from "mongoose";

mongoose.set('strictQuery', true)

export const Connection = async (userName, password) => {
    // const URL = `mongodb+srv://${userName}:${password}@flipkart.ox3c1a6.mongodb.net/?retryWrites=true&w=majority`
    const URL = 'mongodb+srv://user:admin@flipkart.ox3c1a6.mongodb.net/?retryWrites=true&w=majority'
    try {
        await mongoose.connect(URL, {})
        console.log("DataBase Connection established successfully")
    }
    catch (err) {
        console.log('DATABASE ERROR  hai Bhaiya')
        console.log('')
        console.log(err.message)
        process.exit()
    }
}

export default Connection;
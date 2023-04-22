import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'

import Router from './routes/routes.js'
import defaultData from './default.js'
import Connection from './database/db.js'

const app = express()
dotenv.config()


const PORT = 8000
const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD

const corsOption = {
    credentials: true,
    origin: ['http://localhost:3000']
}
app.use(cors(corsOption))

//? we Can uses [app.use(express.json())] or body-parser Both , no issue
// app.use(express.json())
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', Router)


Connection(USERNAME, PASSWORD)

app.listen(PORT, (err) => {
    if (err) {
        console.log('There is some error From Server side')
    }
    console.log(`Listening the Server at PORT http://localhost:${PORT}`)
})

defaultData();
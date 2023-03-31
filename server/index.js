import express from 'express'
import dotenv from 'dotenv'
import defaultData from './default.js'

import Connection from './database/db.js'


const app = express()

const PORT = 8000

const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD

app.get('/', (req, res) => {
    res.send('<h1>HI Rahul</h1>')
})


Connection(USERNAME, PASSWORD)

app.listen(PORT, (err) => {
    if (err) {
        console.log('There is some error From Server side')
    }
    console.log(`Listening the Server at PORT http://localhost:${PORT}`)
})

defaultData();
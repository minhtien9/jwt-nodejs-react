import express from 'express'
import bodyParser from 'body-parser'

import configViewEngine from './config/viewEngine'
import initWebRoutes from './routes/web'
require('dotenv').config()

import connectDB from './config/connectDB'

const app = express()
const PORT = process.env.PORT || 8080

// config body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// config view engine
configViewEngine(app)

// connectDB
// init web routes
initWebRoutes(app)

app.listen(PORT, () => {
    console.log('>>> Listening on port =' + PORT)
})

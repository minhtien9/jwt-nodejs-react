import express from 'express'
import bodyParser from 'body-parser'

import configViewEngine from './config/viewEngine'
import initWebRoutes from './routes/web'
require('dotenv').config()

import connection from './config/connectDB'

const app = express()
const PORT = process.env.PORT || 8080

// Add headers before the routes are defined
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', process.env.REACT)
})

// config body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// config view engine
configViewEngine(app)

// connectDB
connection()

// init web routes
initWebRoutes(app)

app.listen(PORT, () => {
    console.log('>>> Listening on port =' + PORT)
})

import express from 'express'
import bodyParser from 'body-parser'

import configViewEngine from './config/viewEngine'
import initWebRoutes from './routes/web'
require('dotenv').config()

import connection from './config/connectDB'
import configCORS from './config/cors'

const app = express()
const PORT = process.env.PORT || 8080

// config CORS
configCORS(app)

// config body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// config view engine
configViewEngine(app)

// connectDB
connection()

// init web routes
initWebRoutes(app)
initAPI

app.listen(PORT, () => {
    console.log('>>> Listening on port =' + PORT)
})

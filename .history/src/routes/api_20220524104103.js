import express from 'express'
import apiController from '../controller/'

const router = express.Router()

const initApiRoutes = (app) => {
    // config view engine
    configViewEngine(app)

    // connectDB
    connection()

    // init web routes
    initWebRoutes(app)

    app.listen(PORT, () => {
        console.log('>>> Listening on port =' + PORT)
    })
}

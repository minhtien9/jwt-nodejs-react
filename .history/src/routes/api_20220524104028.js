import express from 'express'
import apiController from '../controller/'

const router = express.Router()

const initApiRoutes = () => {
    const app = express()
    const PORT = process.env.PORT || 8080

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
}

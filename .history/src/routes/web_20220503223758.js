import express from 'express'
import homeController from '../controller/homeController'

const router = express.Router()
/**
 *
 * @param {*} app - express app
 */
const initWebRoutes = (app) => {
    router.get('/', (req, res) => {
        return res.send('hello world')
    })

    return app.use('/', router)
}
export default initWebRoutes

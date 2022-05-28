import express from 'express'
import homeController from '../controller/homeController'
import apiController from '../controller/apiController'

const router = express.Router()
/**
 *
 * @param {*} app - express app
 */
const initApiRoutes = (app) => {
    router.get('/api/test-api', apiController.testApi)
    router.post('/api/test-api', apiController.testApi)

    return app.use('/', router)
}
export default initApiRoutes

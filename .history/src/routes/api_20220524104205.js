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
    router.post('/register', apiController.handleRegister)

    return app.use('/api/v1', router)
}
export default initApiRoutes

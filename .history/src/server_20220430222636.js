import express from 'express'

import configViewEngine from './configs/viewEngine'
import initWebRoutes from './routes/web'

const app = express()

// config view engine
configViewEngine(app)

initWebRoutes(app)

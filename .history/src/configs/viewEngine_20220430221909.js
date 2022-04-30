import express from 'express'

/**
 *
 * @param {*} app - express app
 */
const configViewEngine = (app) => {
  app.use(express.static('public')))
}

export default configViewEngine

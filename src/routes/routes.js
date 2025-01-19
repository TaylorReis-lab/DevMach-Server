import { Router } from 'express'
import UserController from '../app/controllers/UserController.js'

const routes = new Router()

routes.post('/users', UserController.store)
routes.get('/users', UserController.getAllUsers)

export default routes
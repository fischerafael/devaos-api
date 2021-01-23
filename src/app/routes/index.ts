import { Router } from 'express'
import { userController } from '../controllers/user'

const routes = Router()

routes.get('/', (req, res) => res.send('DevAos-v1'))

routes.post('/users', userController.create)
routes.get('/users', userController.index)

export default routes

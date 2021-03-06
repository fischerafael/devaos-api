import { Router } from 'express'

import { createDevController } from '../controllers/dev/create'
import { userController } from '../controllers/user'

const routes = Router()

routes.get('/', (req, res) => res.send('DevAos-v1'))

routes.post('/devs', createDevController)

routes.post('/users', userController.create)
routes.get('/users', userController.index)
routes.get('/users/:user_id', userController.show)

export default routes

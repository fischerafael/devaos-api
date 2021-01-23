import { Router } from 'express'

const routes = Router()

routes.get('/', (req, res) => res.send('DevAos-v1'))

export default routes

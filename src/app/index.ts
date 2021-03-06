import { database } from '../database'
import { config } from './middlewares/config'

import express from 'express'

database.connect()

const app = express()

config.cors(app)
config.json(app)
config.routes(app)

export default app

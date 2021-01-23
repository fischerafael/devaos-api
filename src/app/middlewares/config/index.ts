import express, { Express } from 'express'
import cors from 'cors'

import routes from '../../routes'

export const config = {
    cors(app: Express) {
        app.use(cors())
    },
    json(app: Express) {
        app.use(express.json())
    },
    routes(app: Express) {
        app.use(routes)
    }
}

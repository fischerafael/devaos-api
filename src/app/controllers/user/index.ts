import { Request, Response } from 'express'

import { indexUsersService } from '../../../components/user/services/index'
import { createUserService } from '../../../components/user/services/create'

export const userController = {
    async create(req: Request, res: Response) {
        const { body } = req
        try {
            const { status, message, data } = await createUserService(body)
            res.status(status).json({ message, data })
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async index(req: Request, res: Response) {
        const { query } = req
        try {
            const { status, message, data } = await indexUsersService(query)
            res.status(status).json({ message, data })
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async show(req: Request, res: Response) {
        res.send('lista usuário específico')
    }
}

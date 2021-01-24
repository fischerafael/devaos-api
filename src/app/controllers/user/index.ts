import { Request, Response } from 'express'
import { userService } from '../../../components/user/services'
import { indexUsersService } from '../../../components/user/services/index'

export const userController = {
    async create(req: Request, res: Response) {
        const { body } = req
        try {
            const { status, message, data } = await userService.create(body)
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

import { Request, Response } from 'express'
import { userService } from '../../../components/user/services'

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
        res.send('lista usuários')
    },
    async show(req: Request, res: Response) {
        res.send('lista usuário específico')
    }
}

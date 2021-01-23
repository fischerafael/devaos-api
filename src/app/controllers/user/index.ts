import { Request, Response } from 'express'

export const userController = {
    create(req: Request, res: Response) {
        res.send('cria usuário')
    },
    index(req: Request, res: Response) {
        res.send('lista usuários')
    }
}

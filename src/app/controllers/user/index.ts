import { Request, Response } from 'express'

export const userController = {
    create(req: Request, res: Response) {
        const { body } = req
        try {
            const { status, data } = userService.create(body)
            res.status(status).json(data)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    index(req: Request, res: Response) {
        res.send('lista usuários')
    },
    show(req: Request, res: Response) {
        res.send('lista usuário específico')
    }
}

export const userService = {
    create(body: object) {
        return {
            status: 200,
            data: 'ok'
        }
    }
}

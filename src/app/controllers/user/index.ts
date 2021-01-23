import { Request, Response } from 'express'
import User from '../../../database/mongodb/models/User'
import { formatResponse } from '../../helpers'

export const userController = {
    async create(req: Request, res: Response) {
        const { body } = req
        try {
            const { status, data } = await userService.create(body)
            res.status(status).json(data)
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

export const userService = {
    async create(request: ICreateUserBodyRequest) {
        // validate data
        // create data object
        // interact with database
        // return
        const user = await User.create()
        return formatResponse(200, 'ok')
    }
}

interface ICreateUserBodyRequest {
    github: string
    password: string
    email: string
    firstName: string
    lastName: string
    birthYear: number
    city: string
    country: string
    latitude: number
    longitude: number
}

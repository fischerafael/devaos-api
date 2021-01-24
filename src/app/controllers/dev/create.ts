import { Request, Response } from 'express'

export async function createDevController(req: Request, res: Response) {
    return res.status(200).json('ok')
}

export async function createDevService(body: any) {}

import { mongoDB } from './mongodb'

export const database = {
    async connect() {
        await mongoDB.connect()
    }
}

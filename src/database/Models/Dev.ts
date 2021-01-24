import mongoose from 'mongoose'

interface IDevModel extends mongoose.Document, IDev {}

const Schema = new mongoose.Schema({
    login: { type: String, required: true, lowercase: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    personal: {
        name: { type: String, required: true },
        avatar: { type: String, required: true },
        bio: { type: String, required: true }
    }
})

export default mongoose.model<IDevModel>('Dev', Schema)

interface IDev {
    login: string
    password: string
    email: string
    personal: {
        name: string
        avatar: string
        bio: string
    }
}

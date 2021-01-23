import mongoose from 'mongoose'

interface IUserModel extends IUser, mongoose.Document {}

const PointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
})

const Schema = new mongoose.Schema({
    github: { type: String, required: true, lowercase: true },
    password: { type: String, required: true },
    personal: {
        name: {
            first: { type: String, required: true },
            last: { type: String, required: true },
            birthYear: { type: Number, required: true }
        },
        address: {
            city: { type: String, required: true },
            country: { type: String, required: true },
            location: { type: PointSchema, index: '2dsphere', required: true }
        },
        contact: {
            email: { type: String, required: true },
            linkedin: { type: String },
            website: { type: String }
        }
    }
})

export default mongoose.model<IUserModel>('User', Schema)

interface IPointSchema {
    type: string
    coordinates: [number, number]
}

interface IUser {
    github: string
    password: string
    personal: {
        name: {
            first: string
            last: string
            birthYear: number
        }
        address: {
            city: string
            country: string
            location: IPointSchema
        }
        contact: {
            email: string
            linkedin?: string
            website?: string
        }
    }
}

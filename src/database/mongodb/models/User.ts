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
    email: { type: String, required: true, lowercase: true },
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
        }
    }
})

export default mongoose.model<IUserModel>('User', Schema)

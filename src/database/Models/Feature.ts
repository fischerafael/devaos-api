import mongoose from 'mongoose'

interface IFeatureModel extends mongoose.Document, IFeature {}

const Schema = new mongoose.Schema({
    type: { type: String, required: true },
    title: { type: String, required: true },
    institution: { type: String, required: true },
    startedAt: { type: String, required: true },
    finishedAt: { type: String, required: true },
    local: { type: String, required: true }
})

export default mongoose.model<IFeatureModel>('Feature', Schema)

interface IFeature {
    type: 'skill' | 'professional' | 'education'
    title: string
    institution: string
    startedAt: string
    finishedAt: string
    local: string
}

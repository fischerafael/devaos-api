import mongoose from 'mongoose'

const MONGO_URL = process.env.MONGO_URL

export const mongoDB = {
    async connect() {
        try {
            if (!MONGO_URL) {
                console.log('No MongoDB URL provided')
                return
            }
            mongoose.connect(
                MONGO_URL,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useFindAndModify: false
                },
                () => console.log('Connected to MongoDB')
            )
        } catch (err) {
            console.log('Unable to connect to MongoDB')
        }
    }
}

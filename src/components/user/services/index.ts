import User from '../../../database/mongodb/models/User'

import { formatData } from '../helpers/format-data'
import { processData } from '../helpers/process-data'
import { formatResponse } from '../../../app/helpers'

export const userService = {
    async create(request: ICreateUserBodyRequest) {
        const {
            github,
            email,
            password,
            firstName,
            lastName,
            birthYear,
            city,
            country,
            latitude,
            longitude
        } = request
        // validate data
        // manipulate data
        const hashedPassword = await processData.hashPassword(password)

        const userData = formatData.user({
            github,
            email,
            password: hashedPassword,
            firstName,
            lastName,
            birthYear,
            city,
            country,
            latitude,
            longitude
        })
        // interact with database
        const createdUser = await User.create(userData)
        // format return

        // return
        return formatResponse(200, 'User created successfully', createdUser)
    }
}

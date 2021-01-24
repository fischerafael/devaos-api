import { formatResponse } from '../../../../app/helpers'
import User from '../../../../database/mongodb/models/User'

export async function indexUsersService(query: any) {
    const users = await User.find()

    return formatResponse(200, 'Ok', users)
}

import { formatResponse } from '../../../../app/helpers'
import User from '../../../../database/mongodb/models/User'

export async function showUserService(email: string) {
    const user = await User.findOne({ email })

    return formatResponse(200, 'Ok', user)
}

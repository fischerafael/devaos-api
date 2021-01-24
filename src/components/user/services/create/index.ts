import { formatResponse } from '../../../../app/helpers'
import User from '../../../../database/mongodb/models/User'
import { formatData } from '../../helpers/format-data'
import { getGitHub } from '../../helpers/get-github'
import { processData } from '../../helpers/process-data'
import { validateEmail } from '../../helpers/validate-email'

export async function createUserService(request: ICreateUserBodyRequest) {
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
    const isEmailValid = validateEmail(email)
    if (!isEmailValid) return formatResponse(400, 'Invalid email')

    // manipulate data
    const hashedPassword = await processData.hashPassword(password)

    // business logic
    const hasGitHub = await getGitHub(github)
    if (!hasGitHub) return formatResponse(404, 'Github user does not exist')

    const hasUser = await User.findOne({ email })
    if (hasUser) return formatResponse(409, 'This email is already being used')

    // create user data object
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

import bcrypt from 'bcryptjs'

export const processData = {
    async hashPassword(plainPassword: string) {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(plainPassword, salt)
        return hashedPassword
    }
}

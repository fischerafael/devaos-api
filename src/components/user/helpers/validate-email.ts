export function validateEmail(email: string) {
    if (!email.includes('@')) return false
    return true
}

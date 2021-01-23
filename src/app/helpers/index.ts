export function formatResponse(status: number, message: string, data?: object) {
    return {
        status,
        message,
        data
    }
}

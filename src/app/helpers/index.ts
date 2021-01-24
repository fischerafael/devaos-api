export function formatResponse(
    status: number,
    message: string,
    response?: object
) {
    return {
        status,
        data: {
            message,
            response
        }
    }
}

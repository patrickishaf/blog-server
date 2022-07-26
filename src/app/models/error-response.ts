export default function ErrorResponse(statusCode: number, body: any) {
    return ({
        error: {
            statusCode,
            body
        }
    });
}

export const ErrorResponseJSON = (statusCode: number, body: any) => {
    return JSON.stringify({
        error: {
            statusCode,
            body
        }
    });
}
export default function ErrorResponse(statusCode: number, body: any) {
    return ({
        type: 'error',
        statusCode,
        body
    });
}

export const ErrorResponseJSON = (statusCode: number, body: any) => {
    return JSON.stringify({
        type: 'error',
        statusCode,
        body
    });
}
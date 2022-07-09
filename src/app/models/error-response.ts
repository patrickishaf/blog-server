export default function ErrorResponse(code: number, body: any) {
    return ({
        error: {
            code,
            body
        }
    });
}

export const ErrorResponseJSON = (code: number, body: any) => {
    return JSON.stringify({
        error: {
            code,
            body
        }
    });
}
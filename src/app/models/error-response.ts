export default function ErrorResponse(code: number, body: any) {
    return ({
        error: {
            code,
            body
        }
    });
}
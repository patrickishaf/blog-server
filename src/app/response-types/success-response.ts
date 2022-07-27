export default function SuccessResponse(body: any, code?: number) {
    return ({
        type: 'success',
        statusCode: code ?? 200,
        body
    });
}

export const SuccessResponseJSON = (body: any, code?: number) => {
    return JSON.stringify({
        type: 'success',
        statusCode: code ?? 200,
        body
    });
}
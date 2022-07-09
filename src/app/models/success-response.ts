export default function SuccessResponse(body: any) {
    return ({
        success: {
            statusCode: 200,
            body
        }
    });
}

export const SuccessResponseJSON = (body: any) => {
    return JSON.stringify({
        success: {
            statusCode: 200,
            body
        }
    });
}
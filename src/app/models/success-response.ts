export default function SuccessResponse(body: any) {
    return ({
        success: {
            statusCode: 200,
            body
        }
    });
}
import ErrorResponse from '../../../app/response-types/error-response';

const ensureClientAuth = (req, res, next) => {
    if (!req.session.id) {
        return res.status(501).json(ErrorResponse(501, 'user is not authenticated'));
    }
    next();
}

export default ensureClientAuth;
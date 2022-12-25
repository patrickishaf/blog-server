import ErrorResponse from '../../../app/response-types/error-response';
import jsonwebtoken from 'jsonwebtoken';

const ensureClientAuth = (req, res, next) => {
    if (!req.session.id) {
        return res.status(501).json(ErrorResponse(501, 'user is not authenticated'));
    }
    next();
}

export const authorizeJsonWebToken = (req, res, next) => {
    try {
        const token = req.headers['Authorization'].split(' ')[2];
        console.log('THE TOKEN IS: ', token);
        jsonwebtoken.verify(token, process.env.SIGNING_SECRET);
        next();
    } catch(err) {
        return res.status(503).json(ErrorResponse(501, 'user is not authenticated'));
    }
}

export default ensureClientAuth;
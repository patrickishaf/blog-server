import express from 'express';
import ErrorResponse from '../../../app/response-types/error-response';

const ensureClientIsAuthenticated = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const session = req.session as any;
    if (session.user === undefined) {
        res.status(501).json(ErrorResponse(501, 'user is not authenticated'));
    } else {
        next();
    }
}

export default ensureClientIsAuthenticated;
import express from 'express';
import ErrorResponse from '../../../app/response-types/error-response';

const ensureClientAuth = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const session = req.session as any;
    if (!session.id) {
        res.status(501).json(ErrorResponse(501, 'user is not authenticated'));
    } else {
        console.log('THE SESSION ID IS:', session.id);
        next();
    }
}

export default ensureClientAuth;
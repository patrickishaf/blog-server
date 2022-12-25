import express from 'express';
import { login, register } from '../middleware/auth-controller';

const authRouter: express.Router = express.Router();

// authRouter.get('/authstate', getAuthState);

authRouter.post('/login', login);

authRouter.post('/register', register);

export default authRouter;
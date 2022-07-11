import express from 'express';
import { login, register, verifyAuthToken } from '../middleware/auth-controller';

const authRouter: express.Router = express.Router();

authRouter.post('/login', login);

authRouter.post('/register', register);

authRouter.post('verifyToken', verifyAuthToken);

export default authRouter;
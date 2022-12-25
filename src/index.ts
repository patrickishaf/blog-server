require('dotenv').config();
import express from 'express';
import session from 'express-session';
import authRouter from './modules/auth/routes/router';
import commentsRouter from './modules/comments/routes/router';
import postsRouter from './modules/posts/routes/router';
import usersRouter from './modules/users/routes/router';
import cors from 'cors';
import sessionConfig from './app/config/session';
import { authorizeJsonWebToken } from './modules/auth/middleware/client-auth';

const app: express.Application = express();

app.use(cors({
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
}));

app.use(express.json());

app.use(session(sessionConfig));

app.use('/auth', authRouter);

app.use('/comments', commentsRouter);

app.use('/posts', postsRouter);

app.use('/users', usersRouter);

app.get('/', authorizeJsonWebToken, (req: express.Request, res: express.Response) => {
    res.status(200).json({status: 'success', body: 'ENTER THE DRAGON'});
});

app.listen(process.env.PORT || 8000, () => {
    console.log('ENTER THE DRAGON');
});

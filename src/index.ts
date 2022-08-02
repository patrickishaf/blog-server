require('dotenv').config();
import express from 'express';
import session from 'express-session';
import authRouter from './modules/auth/routes/router';
import commentsRouter from './modules/comments/routes/router';
import postsRouter from './modules/posts/routes/router';
import usersRouter from './modules/users/routes/router';
import cors from 'cors';

const app: express.Application = express();

app.use(cors({
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
}));

app.use(express.json());

app.use(session({
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 36000000
    }
}));

app.use('/auth', authRouter);

app.use('/comments', commentsRouter);

app.use('/posts', postsRouter);

app.use('/users', usersRouter);

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('ENTER THE DRAGON');
});

app.listen(process.env.PORT || 8000, () => {
    console.log('ENTER THE DRAGON');
});

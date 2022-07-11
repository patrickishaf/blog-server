import express from 'express';
import commentsRouter from './modules/comments/routes/router';
import postsRouter from './modules/posts/routes/router';
import usersRouter from './modules/users/routes/router';

const app: express.Application = express();

app.use(express.json());

app.use('/comments', commentsRouter);

app.use('/posts', postsRouter);

app.use('/users', usersRouter);

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('ENTER THE DRAGON');
});

app.listen(3000, () => {
    console.log('ENTER THE DRAGON');
});

import express from 'express';
import postsRouter from './modules/posts/routes/router';
import testDB from './modules/posts/services/posts-db-driver';
import usersRouter from './modules/users/routes/router';

const app: express.Application = express();

app.use(express.json());

app.use('/posts', postsRouter);

app.use('/users', usersRouter);

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('WELCOME TO THE BLOG');
});

app.listen(3000, () => {
    console.log('ENTER THE DRAGON');
});
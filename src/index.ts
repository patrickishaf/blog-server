import express from 'express';
import authRouter from './modules/auth/routes/router';
import commentsRouter from './modules/comments/routes/router';
import postsRouter from './modules/posts/routes/router';
import usersRouter from './modules/users/routes/router';
const cors = require('cors');

const app: express.Application = express();

app.use(cors({origin: '*'}));

app.use(express.json());

app.use('/auth', authRouter);

app.use('/comments', commentsRouter);

app.use('/posts', postsRouter);

app.use('/users', usersRouter);

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('ENTER THE DRAGON');
});

app.listen(8000, () => {
    console.log('ENTER THE DRAGON');
});

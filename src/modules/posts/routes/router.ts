import express from 'express';
import ensureClientAuth from '../../auth/middleware/client-auth';
import { createNewPost, deletePost, editPost, getPosts, getPostWithID } from '../middleware/posts-controller';

const postsRouter:express.Router = express.Router();

postsRouter.use(ensureClientAuth);

postsRouter.get('', getPosts);

postsRouter.get('/:id', getPostWithID);

postsRouter.post('/new', createNewPost);

postsRouter.patch('/:id', editPost);

postsRouter.delete('/:id', deletePost);

export default postsRouter;
import express from 'express';
import ensureClientAuth from '../../auth/middleware/client-auth';
import { createNewPost, deletePost, editPost, getPostAuthor, getPosts, getPostWithID } from '../middleware/posts-controller';

const postsRouter:express.Router = express.Router();

postsRouter.use(ensureClientAuth);

postsRouter.get('', getPosts);

postsRouter.get('/:id', getPostWithID);

postsRouter.get('/:id/author', getPostAuthor);

postsRouter.post('/new', createNewPost);

postsRouter.put('/:id', editPost);

postsRouter.delete('/:id', deletePost);

export default postsRouter;
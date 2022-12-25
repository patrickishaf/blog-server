import express from 'express';
import { authorizeJsonWebToken } from '../../auth/middleware/client-auth';
import { createNewPost, deletePost, editPost, getPosts, getPostWithID } from '../middleware/posts-controller';

const postsRouter:express.Router = express.Router();

postsRouter.use(authorizeJsonWebToken);

postsRouter.get('', getPosts);

postsRouter.get('/:id', getPostWithID);

postsRouter.post('/new', createNewPost);

postsRouter.patch('/:id', editPost);

postsRouter.delete('/:id', deletePost);

export default postsRouter;
import express from 'express';
import { createNewPost, editPost, getPostAuthor, getPosts, getPostWithID } from '../middleware/posts-controller';

const postsRouter:express.Router = express.Router();

postsRouter.get('', getPosts);

postsRouter.get('/:id', getPostWithID);

postsRouter.get('/:id/author', getPostAuthor);

postsRouter.post('/new', createNewPost);

postsRouter.put('/:id', editPost);

export default postsRouter;
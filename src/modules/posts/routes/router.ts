import express from 'express';
import { createNewPost, deletePost, editPost, getPostAuthor, getPosts, getPostWithID } from '../middleware/posts-controller';

const postsRouter:express.Router = express.Router();

postsRouter.get('', getPosts);

postsRouter.get('/:id', getPostWithID);

postsRouter.get('/:id/author', getPostAuthor);

postsRouter.post('', createNewPost);

postsRouter.post('/new', createNewPost);

postsRouter.put('/:id', editPost);

postsRouter.delete('/:id', deletePost);

export default postsRouter;
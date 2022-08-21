import express from 'express';
import { createNewUser, deleteUser, editUserInfo, getPostsWrittenByUser, getUsers, getUserWithID } from '../middleware/users-controller';

const usersRouter:express.Router = express.Router();

usersRouter.get('', getUsers);

usersRouter.get('/:id', getUserWithID);

usersRouter.get('/:id/posts', getPostsWrittenByUser);

usersRouter.post('/new', createNewUser);

usersRouter.put('/:id', editUserInfo);

usersRouter.delete('/:id', deleteUser);

export default usersRouter;
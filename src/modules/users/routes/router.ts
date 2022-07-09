import express from 'express';
import { createNewUser, deleteUser, editUserInfo, getPostsByUser, getUsers, getUserWithID } from '../middleware/users-controller';

const usersRouter:express.Router = express.Router();

usersRouter.get('', getUsers);

usersRouter.get('/:id', getUserWithID);

usersRouter.get('/:id/posts', getPostsByUser);

usersRouter.post('/new', createNewUser);

usersRouter.put('/:id', editUserInfo);

usersRouter.delete('/:id', deleteUser);

export default usersRouter;
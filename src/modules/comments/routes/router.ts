import express from 'express';
import { addCommentToPost, deleteComment, editComment, getAllComments, getCommentsFromPostID, getCommentWithID } from '../middleware/comments-controller';

const commentsRouter: express.Router = express.Router();

commentsRouter.get('', getAllComments);

commentsRouter.get('/all', getAllComments);

commentsRouter.get('/:id', getCommentWithID);

commentsRouter.get('/:postid', getCommentsFromPostID);

commentsRouter.post('/new/:postid', addCommentToPost);

commentsRouter.put('/:id', editComment);

commentsRouter.delete('/:id', deleteComment);

export default commentsRouter;
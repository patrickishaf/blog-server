import express from 'express';
import { ErrorResponseJSON } from '../../../app/models/error-response';
import { SuccessResponseJSON } from '../../../app/models/success-response';
import { Comment } from '../models/comment';
import comments from '../services/comments';
import { validateNewCommentStructure } from './validators';

export const getAllComments = (req: express.Request, res: express.Response) => {
    console.log('ALL COMMENTS:', comments);
    res.status(200).send(SuccessResponseJSON(comments));
}

export const getCommentsFromPostID = (req: express.Request, res: express.Response) => {
    const postID = parseInt(req.params.postid);
    const matchingComments: Comment[] = comments.filter((comment) => comment.postID === postID);
    res.status(200).send(SuccessResponseJSON(matchingComments));
}

export const getCommentWithID = (req: express.Request, res: express.Response) => {
    const commentID = parseInt(req.params.id);
    const matchingComment = comments.find((comment) => comment.id === commentID);
    res.status(200).send(SuccessResponseJSON(matchingComment));
}

export const addCommentToPost = (req: express.Request, res: express.Response) => {
    try {
        const requestBody = req.body;
        const postID = parseInt(req.params.postid);
        const commentWithPostID = Object.assign({}, requestBody, {postID});
        comments.push(commentWithPostID);
        res.status(200).send(SuccessResponseJSON(commentWithPostID));
    } catch (err) {
        res.status(500).send(ErrorResponseJSON(500, 'Some server error happened, fam'));
    }
}

export const editComment = (req: express.Request, res: express.Response) => {
    try {
        // I made this as an object with only a body property so that you will only be able to change the body of a comment - not other of its properties
        const newCommentBody = {body: req.body.body};
        const matchingComment = comments.find((comment) => comment.id === parseInt(req.params.id)) as Comment;
        const editedComment = Object.assign(
            matchingComment,
            newCommentBody
        );
        res.status(200).send(SuccessResponseJSON(editedComment));
    } catch (err) {
        const error = err as Error;
        res.status(500).send(ErrorResponseJSON(500, `SERVER ERROR: ${error.message}`));
    }
}

export const deleteComment = (req: express.Request, res: express.Response) => {
    try {
        const indexOfComment = (parseInt(req.params.id) - 1);
        const deletedComment = comments.splice(indexOfComment, 1);
        res.status(200).send(SuccessResponseJSON(deletedComment));
    } catch (err) {
        const error = err as Error;
        console.log('SERVER ERROR');
        res.status(500).send(ErrorResponseJSON(500, `SERVER ERROR: ${error.message}`));
    }
}
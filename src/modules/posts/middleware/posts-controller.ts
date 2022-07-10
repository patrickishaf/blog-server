import express from 'express';
import SuccessResponse from '../../../app/models/success-response';
import ErrorResponse from '../../../app/models/error-response';
import posts from '../services/posts';
import { validateNewPostObject, validatePostID } from './validators';
import users from '../../users/services/users';
import { Post } from '../models/post';
import { getCommentsFromPostID } from '../../comments/middleware/comments-controller';

export const getPosts = (req: express.Request, res: express.Response) => {
    res.status(200).send(JSON.stringify(SuccessResponse(posts)));
}

export const getPostWithID = (req: express.Request, res: express.Response) => {
    if (validatePostID(parseInt(req.params.id))) {
        const result = posts.filter((post) => post.id === parseInt(req.params.id));
        res.status(200).send(JSON.stringify(SuccessResponse(result)));
    } else {
        res.status(404).send(JSON.stringify(ErrorResponse(404, 'Post Not Found')));
    }
}

export const getPostAuthor = (req: express.Request, res: express.Response) => {
    if (validatePostID(parseInt(req.params.id))) {
        const matchingPost = posts.filter((post) => post.id === parseInt(req.params.id))[0];
        const author = users.filter((user) => user.id === matchingPost.author.id);
        res.status(200).send(JSON.stringify(SuccessResponse(author)));
    } else {
        res.status(404).send(JSON.stringify(ErrorResponse(404, 'Post Not Found')));
    }
}

export const getPostComments = (req: express.Request, res: express.Response) => {
    getCommentsFromPostID(req, res);
}

export const createNewPost = (req: express.Request, res: express.Response) => {
    if (validateNewPostObject(req.body) && !validatePostID(req.body.id)) {
        posts.push(req.body);
        res.status(200).send(JSON.stringify(SuccessResponse(req.body)));
    } else {
        res.status(401).send('Error: Bad request');
    }
}

export const editPost = (req: express.Request, res: express.Response) => {
    try {
        let matchingPost = posts.filter((post) => post.id === parseInt(req.params.id))[0];
        let updatedPostData = req.body as Post;
        if (updatedPostData.id) {
            matchingPost.id = updatedPostData.id;
        }
        if (updatedPostData.title) {
            matchingPost.title = updatedPostData.title;
        }
        if (updatedPostData.id) {
            matchingPost.id = updatedPostData.id;
        }
        if (updatedPostData.body) {
            matchingPost.body = updatedPostData.body;
        }
        if (updatedPostData.author) {
            matchingPost.author = updatedPostData.author;
        }
        if (updatedPostData.timeCreated) {
            matchingPost.timeCreated = updatedPostData.timeCreated;
        }
        posts[matchingPost.id] = matchingPost;
        res.status(200).send(JSON.stringify(SuccessResponse(matchingPost)));
    } catch (err) {
        const error = err as Error;
        res.status(501).send(JSON.stringify(ErrorResponse(501, 'Not your fault, bro. Server malfunction')));
    }
}

export const deletePost = (req: express.Request, res: express.Response) => {
    try {
        const deletedPost = posts.splice((parseInt(req.params.id) - 1), 1);
        res.status(200).send(JSON.stringify(SuccessResponse(deletedPost)));
    } catch (err) {
        const error = err as Error;
        res.status(501).send(JSON.stringify(ErrorResponse(501, 'Gimme a hug bro. It\'s not your fault, bro. Server malfunction')));
    }
}

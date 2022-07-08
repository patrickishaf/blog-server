import express from 'express';
import SuccessResponse from '../../../app/models/success-response';
import ErrorResponse from '../../../app/models/error-response';
import posts from '../services/posts';
import { validateNewPostObject, validatePostID } from './validators';
import users from '../../users/services/users';

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

export const createNewPost = (req: express.Request, res: express.Response) => {
    if (validateNewPostObject(req.body) && !validatePostID(req.body.id)) {
        posts.push(req.body);
        res.status(200).send(JSON.stringify(SuccessResponse(req.body)));
    } else {
        console.log('BAD REQUEST');
        res.status(401).send('Error: Bad request');
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

export const editPost = (req: express.Request, res: express.Response) => {
    try {
        let matchingPost = posts.filter((post) => post.id === parseInt(req.params.id))[0];
        let updatedPostData = req.body;
        console.log('UPDATED POST DATA:', updatedPostData);
        // 
        // let copy = Object.assign(matchingPost, ...updatedPostData);
        // console.log('THE NEW DATA IS:', copy);
        // res.status(200).send(JSON.stringify(SuccessResponse(copy)));
    } catch (err) {
        const error = err as Error;
        console.log('RAN INTO AN ERROR:', error.message);
    }
}
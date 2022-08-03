import express from 'express';
import SuccessResponse, { SuccessResponseJSON } from '../../../app/response-types/success-response';
import { ErrorResponseJSON } from '../../../app/response-types/error-response';
import posts from '../services/posts';
import { validateNewPostObject, validatePostID } from './validators';
import users from '../../users/services/users';
import { Post } from '../models/post';
import { readPosts, savePost } from '../services/db-service';
import { QueryDocumentSnapshot } from 'firebase/firestore';

export const getPosts = (req: express.Request, res: express.Response) => {
    readPosts().then((data) => {
        let docs = data as Array<QueryDocumentSnapshot>;
        let posts = docs.map(doc => doc.data());
        res.setHeader('Content-Type', 'application/json');
        res.set('Accept', 'application/json');
        res.status(200).json(SuccessResponse(posts));
    }).catch((error) => {
        res.status(501).send(ErrorResponseJSON(501, error));
    });
}

export const getPostWithID = (req: express.Request, res: express.Response) => {
    if (validatePostID(parseInt(req.params.id))) {
        const result = posts.find((post) => post.id === parseInt(req.params.id));
        res.status(200).send(SuccessResponseJSON(result));
    } else {
        res.status(404).send(ErrorResponseJSON(404, 'Post Not Found'));
    }
}

export const getPostAuthor = (req: express.Request, res: express.Response) => {
    if (validatePostID(parseInt(req.params.id))) {
        const matchingPost = posts.find((post) => post.id === parseInt(req.params.id));
        if (matchingPost === undefined || matchingPost === null) {
            res.status(404).send(ErrorResponseJSON(404, 'Post Not Found'));
        } else {
            const author = users.filter((user) => user.id === matchingPost.author.id);
            res.status(200).send(SuccessResponseJSON(author));
        }
    } else {
        res.status(404).send(ErrorResponseJSON(404, 'Post Not Found'));
    }
}

export const createNewPost = (req: express.Request, res: express.Response) => {
    if (validateNewPostObject(req.body) && !validatePostID(req.body.id)) {
        savePost(req.body).then((reference) => {
            res.status(200).send(SuccessResponseJSON(req.body));
        }).catch((err) => {
            res.status(501).send('Server error');
        })
    } else {
        res.status(401).send('Error: Bad request');
    }
}

export const editPost = (req: express.Request, res: express.Response) => {
    try {
        let matchingPost = posts.find((post) => post.id === parseInt(req.params.id)) as Post;
        let updatedPostData = req.body;
        const editedPost = Object.assign(matchingPost, updatedPostData, {id: req.params.id});
        posts[editedPost.id] = editedPost;
        res.status(200).send(SuccessResponseJSON(editedPost));
    } catch (err) {
        res.status(501).send(ErrorResponseJSON(501, 'Not your fault, bro. Server malfunction'));
    }
}

export const deletePost = (req: express.Request, res: express.Response) => {
    try {
        const deletedPost = posts.splice((parseInt(req.params.id) - 1), 1);
        res.status(200).send(SuccessResponseJSON(deletedPost));
    } catch (err) {
        res.status(501).send(ErrorResponseJSON(501, 'Gimme a hug bro. It\'s not your fault, bro. Server malfunction'));
    }
}

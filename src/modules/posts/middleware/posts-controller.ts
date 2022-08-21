import express from 'express';
import SuccessResponse, { SuccessResponseJSON } from '../../../app/response-types/success-response';
import ErrorResponse, { ErrorResponseJSON } from '../../../app/response-types/error-response';
import { validateNewPostObject } from './validators';
import { readPostsOrderedByDate, readPostWithID, createPost, updatePost } from '../services/db-service';
import { QueryDocumentSnapshot } from 'firebase/firestore';
import { getUTCDateFormat } from '../services/date-parser';
import { generateRandomID } from '../../../app/utils/generate-random-ID';

export const getPosts = (req: express.Request, res: express.Response) => {
    readPostsOrderedByDate().then((data) => {
        const docs = data as Array<QueryDocumentSnapshot>;
        const posts = docs.map(doc => ({...doc.data(), timestamp: doc.data().timeCreated, timeCreated: getUTCDateFormat(doc.data().timeCreated)}));
        res.setHeader('Content-Type', 'application/json');
        res.set('Accept', 'application/json');
        res.status(200).json(SuccessResponse(posts));
    }).catch((error) => {
        res.status(501).send(ErrorResponseJSON(501, error));
    });
}

export const getPostWithID = (req: express.Request, res: express.Response) => {
    readPostWithID(req.params.id).then((data) => {
        const docs = data as Array<QueryDocumentSnapshot>;
        const posts = docs.map(doc => doc.data());
        res.set('Content-Type', 'application/json');
        res.set('Accept', 'application/json');
        res.status(200).json(SuccessResponse(posts[0]));
    }).catch((err) => {
        res.status(404).json(ErrorResponse(404, 'No post with the matching ID'));
    });
}

export const createNewPost = async (req: express.Request, res: express.Response) => {
    if (validateNewPostObject(req.body)) {
        try {
            const timeCreated = Date.now();
            const postID = generateRandomID();
            const newPostBody = { ...req.body, timeCreated, id: postID, tags: ['development', 'testing'] };
            const ref = await createPost(newPostBody);
            res.status(200).send(SuccessResponseJSON({
                ...newPostBody,
                timestamp: newPostBody.timeCreated,
                timeCreated: getUTCDateFormat(newPostBody.timeCreated)
            }));
        } catch (err) {
            const error =  err as Error;
            res.status(501).send('Server error' + error.message);
        }
    } else {
        res.status(401).send('Error: Bad request');
    }
}

export const editPost = async (req: express.Request, res: express.Response) => {
    try {
        let { id } = req.body;
        delete req.body.id;
        const reference = await updatePost(id, req.body);
        res.status(200).json(SuccessResponse(reference));
    } catch (err) {
        res.status(501).json(ErrorResponse(501, 'Ran into a server error'));
    }
}

export const deletePost = (req: express.Request, res: express.Response) => {
    // try {
    //     const deletedPost = posts.splice((parseInt(req.params.id) - 1), 1);
    //     res.status(200).send(SuccessResponseJSON(deletedPost));
    // } catch (err) {
    //     res.status(501).send(ErrorResponseJSON(501, 'Gimme a hug bro. It\'s not your fault, bro. Server malfunction'));
    // }
}

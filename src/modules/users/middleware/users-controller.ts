import express from 'express';
import { SuccessResponseJSON } from '../../../app/models/success-response';
import { ErrorResponseJSON } from '../../../app/models/error-response';
import users from '../../users/services/users';
import { validateNewUserObject, validateUserID } from './validators';
import posts from '../../posts/services/posts';
import { User } from '../models/user';

export const getUsers = (req: express.Request, res: express.Response) => {
    res.status(200).send(SuccessResponseJSON(users));
}

export const getUserWithID = (req: express.Request, res: express.Response) => {
    if (validateUserID(parseInt(req.params.id))) {
        const matchingUser = users.find((user) => user.id === parseInt(req.params.id)) as User;
        res.status(200).send(SuccessResponseJSON(matchingUser));
    } else {
        res.status(404).send(ErrorResponseJSON(404, 'Post Not Found'));
    }
}

export const getPostsByUser = (req: express.Request, res: express.Response) => {
    if (validateUserID(parseInt(req.params.id))) {
        const postsByUser = posts.filter((post) => post.author.id === parseInt(req.params.id));
        res.status(200).send(SuccessResponseJSON(postsByUser));
    } else {
        res.status(404).send(ErrorResponseJSON(404, 'Post Not Found'));
    }
}

export const createNewUser = (req: express.Request, res: express.Response) => {
    if (validateNewUserObject(req.body) && !validateUserID(req.body.id)) {
        users.push(req.body);
    }
}

export const editUserInfo = (req: express.Request, res: express.Response) => {
    try {
        const matchingUser = users.find((user) => user.id === parseInt(req.params.id)) as User;
        const updatedUserData = req.body;
        if (updatedUserData.id) {
            matchingUser.id = updatedUserData.id;
        }
        if (updatedUserData.name) {
            matchingUser.name = updatedUserData.name;
        }
        if (updatedUserData.email) {
            matchingUser.email = updatedUserData.email;
        }
        if (updatedUserData.password) {
            matchingUser.password = updatedUserData.password;
        }
        users[matchingUser.id - 1] = matchingUser;
        res.status(200).send(SuccessResponseJSON(matchingUser));
    } catch (err) {
        res.status(501).send(ErrorResponseJSON(501, 'Not your fault, bro. Server malfunction'));
    }
}

export const deleteUser = (req: express.Request, res: express.Response) => {
    if (validateUserID(parseInt(req.params.id))) {
        try {
            const deletedUser = users.splice(parseInt(req.params.id) - 1, 1);
            res.status(200).send(SuccessResponseJSON(deletedUser));
        } catch (err) {
            res.status(501).send(ErrorResponseJSON(501, 'Not your fault, bro. Server malfunction'));
        }
    } else {
        res.status(404).send(ErrorResponseJSON(404, 'User Not Found'));
    }
}
import express from 'express';
import ErrorResponse from '../../../app/response-types/error-response';
import SuccessResponse from '../../../app/response-types/success-response';
import createID from '../services/create-id';
import { createUser } from '../services/create-user';
import generateHash from '../services/generate-hash';
import passwordsMatch from '../services/password-matcher';
import { userExists } from '../services/user-finder';

export const login = async (req: express.Request, res: express.Response) => {
    const { email, password } = req.body;
    const authState = await userExists(email);
    if (authState.status) {
        if (await passwordsMatch(password, authState.data.password)) {
            // TODO: create a session for the user
            res.setHeader('Set-Cookie', [`userID:${authState.data.id}`]);
            res.status(200).json(SuccessResponse(authState));
        } else {
            res.status(406).json(ErrorResponse(406, 'your password is incorrect'));
        }
    } else {
        res.status(401).json(ErrorResponse(500, 'a user with this email does not exist'));
    }
}

export const register = async (req: express.Request, res: express.Response) => {
    const { name, email, password } = req.body;
    const userAuthState = await userExists(email);
    if (userAuthState.status) {
        res.status(400).json(ErrorResponse(400, 'a user has alrady been registered with this email'));
    } else {
        const newUserID = createID();
        const securePasswordHash = await generateHash(password, process.env.PASSWORD_SALT!);
        const newUser = {id: newUserID, name, email, password: securePasswordHash};
        const response = await createUser(newUser);
        res.status(200).json(SuccessResponse(response));
    }
}

export const getAuthState = async(req:express.Request, res: express.Response) => {
    const cookie = req.cookies;
    console.log('THE COOKIES ARE', cookie);
    const authState = await userExists('uiehui');
    if (authState.status) {
        res.status(200).json(SuccessResponse(authState))
    } else {
        res.status(400).json(ErrorResponse(400, 'user is not logged in'))
    }
}

export const verifyAuthToken = (req: express.Request, res: express.Response) => {}
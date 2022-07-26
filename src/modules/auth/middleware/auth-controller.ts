import express from 'express';
import ErrorResponse, { ErrorResponseJSON } from '../../../app/models/error-response';
import SuccessResponse from '../../../app/models/success-response';
import createID from '../services/create-id';
import { createUser } from '../services/create-user';
import generateHash from '../services/generate-hash';
import passwordsMatch from '../services/password-matcher';
import { userExists } from '../services/user-finder';

export const login = async (req: express.Request, res: express.Response) => {
    const { email, password } = req.body;
    const authState = await userExists(email);
    //res.status(200).json(authState);
    if (authState.status) {
        if (await passwordsMatch(password, authState.data.password)) {
            // TODO: create a session for the user
            res.status(200).json(SuccessResponse(authState));
        } else {
            res.status(406).json(ErrorResponse(406, 'your password is incorrect'));
        }
    } else {
        res.status(401).send(ErrorResponseJSON(500, 'a user with this email does not exist'));
    }
}

export const register = async (req: express.Request, res: express.Response) => {
    const { name, email, password } = req.body;
    const userAuthState = await userExists(email);
    if (userAuthState.status) {
        res.status(400).send(ErrorResponseJSON(400, 'a user has alrady been registered with this email'));
    } else {
        const newUserID = createID();
        const securePassword = await generateHash(password, process.env.PASSWORD_SALT!);
        const newUser = {id: newUserID, name, email, password: securePassword};
        const response = await createUser(newUser)
        res.status(200).json(response);
    }
}

export const verifyAuthToken = (req: express.Request, res: express.Response) => {}
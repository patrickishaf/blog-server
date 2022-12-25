import express from 'express';
import ErrorResponse from '../../../app/response-types/error-response';
import SuccessResponse from '../../../app/response-types/success-response';
import createID from '../services/create-id';
import { saveUser } from '../services/save-user';
import generateHash from '../services/generate-hash';
import passwordsMatch from '../services/password-matcher';
import { userExists } from '../services/user-finder';
import jsonwebtoken from 'jsonwebtoken';

export const login = async (req, res) => {
    const { email, password } = req.body;
    const authState = await userExists(email);
    if (authState.status) {
        if (await passwordsMatch(password, authState.data.password)) {
            console.log('AUTHSTATE ID IS: ', authState.data.id);
            console.log('AUTHSTATE PASSWORD IS: ', authState.data.password);
            // TODO: create a session for the user
            req.session.user = authState.data.id;
            req.session.save();
            console.log('THE SESSION AFTER SAVING IS ', req.session);
            // res.setHeader('Set-Cookie', [`userID:${authState.data.id}`]);
            res.status(200).json(SuccessResponse(authState));
        } else {
            res.status(406).json(ErrorResponse(406, 'your password is incorrect'));
        }
    } else {
        res.status(401).json(ErrorResponse(401, 'a user with this email does not exist'));
    }
}

export const register = async (req, res) => {
    const { name, email, password } = req.body;
    const userAuthState = await userExists(email);
    if (userAuthState.status) {
        res.status(400).json(ErrorResponse(400, 'a user has already been registered with this email'));
    } else {
        try {
            const newUserID = createID();
            const securePasswordHash = await generateHash(password, process.env.PASSWORD_SALT);
            const newUser = { id: newUserID, name, email, password: securePasswordHash, iat: Math.floor(Date.now() / 1000) };
            const token = jsonwebtoken.sign(newUser, process.env.SIGNING_SECRET, { expiresIn: '30 days' });
            const response = await saveUser(newUser);
            res.setHeader('Authorization', `Bearer ${token}`).status(200).json(SuccessResponse(response));
        } catch (err) {
            console.log('REGISTRATION ERROR ', err);
            res.status(501).json(ErrorResponse(501, 'some server error'));
        }
    }
}

export const logout = async (req, res) => {
    req.session.destroy(err => {
        if (err) res.status(501).json(ErrorResponse(501, 'Unable to log out'));
    });
    await req.session.save()
    req.session.regenerate(err => {});
}
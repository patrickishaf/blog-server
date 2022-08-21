import express, { NextFunction } from 'express'
import ErrorResponse from '../../../app/response-types/error-response';
import { Post } from "../models/post";

export const validateNewPostObject = (newObject: any) => {
    try {
        let post = newObject as Post;
        return true;
    } catch (err) {
        let error = err as Error;
        console.log(error.message)
        return false;
    }
}
export const validateNewPostObjectMW = (req: express.Request, res: express.Response, next: NextFunction) => {
    try {
        let post = req.body as Post;
        next();
    } catch (err) {
        let error = err as Error;
        console.log(error.message)
        res.status(400).json(ErrorResponse(400, 'The object you posted is not a valid Post object'));
    }
}
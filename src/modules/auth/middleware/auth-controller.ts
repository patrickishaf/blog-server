import express from 'express';

export const login = (req: express.Request, res: express.Response) => {
    console.log('THE REQUEST BODY IS:', req.body);
}

export const register = (req: express.Request, res: express.Response) => {
    console.log('REGSTRATION ENDPOINT. THE REQUEST BODY IS:', req.body);
}

export const verifyAuthToken = (req: express.Request, res: express.Response) => {}
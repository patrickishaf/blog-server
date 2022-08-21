import session from 'express-session';
import redisClient from './redisconf';
let RedisStore = require("connect-redis")(session);

const sessionConfig = {
    // store: new RedisStore({ client: redisClient }),
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 36000000
    }
};

export default sessionConfig;
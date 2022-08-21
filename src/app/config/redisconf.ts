import { createClient } from "redis";
let redisClient = createClient({ legacyMode: true });
redisClient.connect().catch((err) => {
    console.log('THE ERROR IS ', err);
});

export default redisClient;
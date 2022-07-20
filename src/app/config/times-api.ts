require('dotenv').config();

const timesApiConfig = {
    apiKey: process.env.TIMES_API_KEY,
    secret: process.env.TIMES_API_SECRET,
    baseUrl: 'https://api.nytimes.com/svc/'
}

export const apiPaths = {
    mostPopular: {
        emailed: 'emailed/',
        shared: 'shared/',
        viewed: 'viewed/',
    },
    topStories: {
        arts: 'arts',
        home: 'home',
        science: 'science',
        us: 'us',
        world: 'world'
    }
}

export default timesApiConfig;
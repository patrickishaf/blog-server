import { v4 as uuidv4 } from 'uuid';

export const generateRandomID = () => {
    return uuidv4();
}
import bcrypt from 'bcrypt';

const generateHash = async (rawInput: string, salt: string): Promise<string> => {
    try {
        const hash = bcrypt.hash(rawInput, salt);
        return hash;
    } catch(err) {
        throw `unable to hash. error: ${err}`;
    }
}

export default generateHash;
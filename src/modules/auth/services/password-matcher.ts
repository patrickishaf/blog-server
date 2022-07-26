import bcrypt from 'bcrypt';

const passwordsMatch = async (firstPassword: string, secondPassword: string) => {
    return await bcrypt.compare(firstPassword, secondPassword);
}

export default passwordsMatch;
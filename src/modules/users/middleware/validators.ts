import { User } from "../models/user";
import users from "../services/users"

export const validateUserID = (id: number) => {
    return users.map((user) => user.id).includes(id);
}

export const validateNewUserObject = (newObject: any) => {
    try {
        let user = newObject as User;
        return true;
    } catch (err) {
        let error = err as Error;
        console.log(error.message)
        return false;
    }
}
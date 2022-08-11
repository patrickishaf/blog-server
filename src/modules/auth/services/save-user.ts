import { addDoc, doc, setDoc } from "firebase/firestore"
import db from "../../../app/config/firebase"
import NewUser from "../models/new-user";

export const saveUser = async (user: NewUser) => {
    try {
        const docRef = doc(db, 'users', user.id);
        await setDoc(docRef, user as Object);
        return user;
    } catch (err) {
        const error = err as Error;
        throw `ERROR CREATING USER: ${error.name}`;
    }
}
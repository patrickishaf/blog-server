import { collection, DocumentData, getDocs, query, QueryDocumentSnapshot, QuerySnapshot, where } from "firebase/firestore";
import firestore from "../../../app/config/firebase";
import AuthState from "../models/auth-state";

const getUserWithEmail = async (email: string): Promise<QuerySnapshot<DocumentData>> => {
    try { 
        const users = collection(firestore, 'users');
        const q = query(users, where('email', '==', email));
        const snapshot = await getDocs(q);
        return snapshot;
    } catch(err) {
        const error = err as Error;
        throw `UNABLE TO GET USER WITH THIS EMAIL ${email}. ERROR: ${error.name}`;
    }
}

export const userExists = async (email: string): Promise<AuthState> => {
    try {
        const snapshot = await getUserWithEmail(email);
        if (!snapshot.empty) {
            return { status: true, data: snapshot.docs[0].data()}
        } else {
            return { status: false }
        }
    } catch (err) {
        return { status: false};
    }
}

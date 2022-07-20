import firestore from "../../../app/config/firebase";
import { collection, doc, setDoc, getDocs } from 'firebase/firestore';
import { Post } from "../models/post";

export const savePost = (post: Post) => {
    const first = doc(firestore, `posts/${post.title}`);
    return new Promise((resolve, reject) => {
        setDoc(first, post).then((reference) => {
            console.log('SET THE DOC SUCCESSFULLY. REFERENCE', reference);
            resolve(reference)
        }).catch((error) => {
            console.log('ERROR:', error);
            reject(error);
        });
    });
}

export const readPosts = () => {
    return new Promise((resolve, reject) => {
        getDocs(collection(firestore, 'posts')).then((snapshot) => {
            console.log('SNAPSHOT:', snapshot);
            resolve(snapshot.docs);
        }).catch((error) => {
            reject(error);
        })
    });
}

export const updatePost = (id: string) => {
    return new Promise((resolve, reject) => {});
}

export const deletePost = (id: string) => {
    return new Promise((resolve, reject) => {});
}
import firestore from "../../../app/config/firebase";
import { collection, deleteDoc, doc, getDocs, setDoc } from 'firebase/firestore';
import { Post } from "../models/post";

export const savePost = (post: Post) => {
    return new Promise((resolve, reject) => {
        const first = doc(firestore, `posts/${post.title}`);
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
        const postsCollection = collection(firestore, 'posts');
        getDocs(postsCollection).then((snapshot) => {
            console.log('SNAPSHOT:', snapshot);
            resolve(snapshot.docs);
        }).catch((error) => {
            reject(error);
        })
    });
}

export const updatePost = (id: string, updateData: any) => {
    return new Promise((resolve, reject) => {
        const postRef = doc(firestore, 'posts', id)
        setDoc(postRef, updateData, {merge: true}).then((result) => {
            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
}

export const deletePost = (id: string) => {
    return new Promise((resolve, reject) => {
        const postRef = doc(firestore, 'posts', id);
        deleteDoc(postRef).then((result) => {
            resolve(result);
        }).catch((error) => {
            reject(error);
        })
    });
}
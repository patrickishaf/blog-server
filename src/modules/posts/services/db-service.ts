import db from "../../../app/config/firebase";
import { collection, deleteDoc, doc, getDocs, setDoc, query, where, orderBy } from 'firebase/firestore';
import { Post } from "../models/post";

export const savePost = (post: Post) => {
    return new Promise((resolve, reject) => {
        const first = doc(db, `posts/${post.title}`);
        setDoc(first, post).then((reference) => {
            resolve(reference)
        }).catch((error) => {
            reject(error);
        });
    });
}

export const readPosts = () => {
    return new Promise((resolve, reject) => {
        const postsCollection = collection(db, 'posts');
        getDocs(postsCollection).then((snapshot) => {
            resolve(snapshot.docs);
        }).catch((error) => {
            reject(error);
        });
    });
}

export const readPostsOrderedByDate = () => {
    return new Promise((resolve, reject) => {
        const postsCollection = collection(db, 'posts');
        const qry = query(postsCollection, orderBy('timeCreated', 'desc'));
        getDocs(qry).then((snapshot) => {
            resolve(snapshot.docs);
        }).catch((err) => {
            reject(err);
        })
    });
}

export const readPostWithID = (id: string) => {
    return new Promise((resolve, reject) => {
        const postsRef = collection(db, 'posts');
        const q = query(postsRef, where('id', '==', id));
        getDocs(q).then((snapshot) => {
            console.log('THE MATCHING POST IS:', snapshot.docs);
            resolve(snapshot.docs);
        }).catch((err) => {
            reject(err);
        })
    })
}

export const updatePost = (id: string, updateData: any) => {
    return new Promise((resolve, reject) => {
        const postRef = doc(db, 'posts', id)
        setDoc(postRef, updateData, {merge: true}).then((result) => {
            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
}

export const deletePost = (id: string) => {
    return new Promise((resolve, reject) => {
        const postRef = doc(db, 'posts', id);
        deleteDoc(postRef).then((result) => {
            resolve(result);
        }).catch((error) => {
            reject(error);
        })
    });
}
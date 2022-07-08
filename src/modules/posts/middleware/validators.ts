import { Post } from "../models/post";
import posts from "../services/posts";

export const validatePostID = (postID: number) => {
    return postID > 0 && postID <= posts.length;
}

export const validateNewPostObject = (newObject: any) => {
    try {
        let post = newObject as Post;
        return true;
    } catch (err) {
        let error = err as Error;
        console.log(error.message)
        return false;
    }
}
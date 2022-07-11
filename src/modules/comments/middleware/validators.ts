import { Comment } from "../models/comment"

export const validateNewCommentStructure = (newComment: any): boolean => {
    try {
        let comment = newComment as Comment;
        return true;
    } catch (err) {
        return false;
    }
}

export interface Comment {
    id: number;
    authorID: number;
    author: string;
    timeCreated: string;
    timeLastModified?: string;
    body: string;
    postID: number;
}
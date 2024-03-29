import { User } from "../../users/models/user";
import { Comment } from "../../comments/models/comment";

export interface Post {
    id: number;
    title: string;
    body: string;
    author: User;
    timeCreated: string;
    comments?: Comment[];
}

export interface DatedPost {
    id: number;
    title: string;
    body: string;
    author: User;
    timeCreated: number;
    comments?: Comment[];
}
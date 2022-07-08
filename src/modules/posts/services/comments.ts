import { Comment } from "../models/comment";
import users from "../../users/services/users";

function createArray(postID: number): Comment[] {
    let array = [];
    let i = 1;
    while (i <= 6) {
        array.push({
            author: users[i - 1].name,
            authorID: users[i - 1].id,
            timeCreated: '11:31am',
            body: 'I absolutely agree',
            postID,
        });
        i++;
    }
    return array;
}

const comments: Comment[] = [
    ...createArray(1),
    ...createArray(2),
    ...createArray(3),
    ...createArray(4),
    ...createArray(5),
    ...createArray(6),
    ...createArray(7),
    ...createArray(8),
    ...createArray(9),
    ...createArray(10),
    ...createArray(11),
    ...createArray(12),
    ...createArray(13),
    ...createArray(14),
    ...createArray(15),
    ...createArray(16),
    ...createArray(17),
    ...createArray(18),
    ...createArray(19),
    ...createArray(20),
    ...createArray(21),
    ...createArray(22),
    ...createArray(23),
    ...createArray(24),
    ...createArray(25),
    ...createArray(26),
    ...createArray(27),
    ...createArray(28),
    ...createArray(29),
    ...createArray(30),
]

export default comments;
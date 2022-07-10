import { Comment } from "../../posts/models/comment";
import users from "../../users/services/users";

function createArrayOfComments(postID: number): Comment[] {
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
    ...createArrayOfComments(1),
    ...createArrayOfComments(2),
    ...createArrayOfComments(3),
    ...createArrayOfComments(4),
    ...createArrayOfComments(5),
    ...createArrayOfComments(6),
    ...createArrayOfComments(7),
    ...createArrayOfComments(8),
    ...createArrayOfComments(9),
    ...createArrayOfComments(10),
    ...createArrayOfComments(11),
    ...createArrayOfComments(12),
    ...createArrayOfComments(13),
    ...createArrayOfComments(14),
    ...createArrayOfComments(15),
    ...createArrayOfComments(16),
    ...createArrayOfComments(17),
    ...createArrayOfComments(18),
    ...createArrayOfComments(19),
    ...createArrayOfComments(20),
    ...createArrayOfComments(21),
    ...createArrayOfComments(22),
    ...createArrayOfComments(23),
    ...createArrayOfComments(24),
    ...createArrayOfComments(25),
    ...createArrayOfComments(26),
    ...createArrayOfComments(27),
    ...createArrayOfComments(28),
    ...createArrayOfComments(29),
    ...createArrayOfComments(30),
]

export default comments;
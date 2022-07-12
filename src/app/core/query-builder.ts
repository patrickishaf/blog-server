import { Comment } from "../../modules/comments/models/comment";
import { Post } from "../../modules/posts/models/post";

const queryBuilder = {
    createCommentsTable: `CREATE TABLE comments (
        id INT NOT NULL AUTO_INCREMENT,
        authorID INT,
        postID INT,
        timeCreated STRING,
        body STRING,
        PRIMARY KEY (id),
        FOREIGN KEY (authorID) REFERENCES users(id),
        FOREIGN KEY (postID) REFERENCES posts(id),
    )`,
    insertComment(comment: Comment): string {
        return (
            `INSERT INTO comments
            (authorID, postID, timeCreated, body)
            VALUES
            (${comment.author}, ${comment.postID}, ${comment.timeCreated}, ${comment.body})`
        );
    },
    readComments(postID: string): string {
        return `SELECT * FROM comments WHERE postID = ${postID} ORDER BY timeCreated`;
    },
    updateComment(data: {id: number, body: string}): string {
        return `UPDATE comments SET body = ${data.body} WHERE id = ${data.id}`;
    },
    deleteComment(id: number): string {
        return `DELETE FROM comments WHERE id = ${id}`;
    },
    createPostsTable: `CREATE TABLE posts (
        id INT NOT NULL,
        title STRING,
        body STRING,
        authorID INT,
        timeCreated STRING,
        PRIMARY KEY (id),
        FOREIGN KEY (authorID) REFERENCES users(id)
    )`,
    createUsersTable: `CREATE TABLE users (
        id INT NOT NULL,
        name STRING,
        email STRING,
        password STRING
        PRIMARY KEY (id)
    )`
}

export default queryBuilder;
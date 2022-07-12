import { Comment } from "../../modules/comments/models/comment";
import { Post } from "../../modules/posts/models/post";
import { User } from "../../modules/users/models/user";

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
        /**
         * I'm not adding the comment ID here because I intend to make the ID increment
         * automatically
         */
        return (
            `INSERT INTO comments
            (authorID, postID, timeCreated, body)
            VALUES
            (${comment.author}, ${comment.postID}, ${comment.timeCreated}, ${comment.body})`
        );
    },
    getCommentsOnPost(postID: number): string {
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
    insertPost(post: Post): string {
        /**
         * I'm not adding the post ID here because I intend to make the ID increment
         * automatically
         */
        return (
            `INSERT INTO posts
            (title, body, authorID, timeCreated)
            VALUES
            (${post.title}, ${post.body}, ${post.author}, ${post.timeCreated})`
        );
    },
    getPost(id: number): string {
        return `SELECT * FROM posts WHERE id = ${id}`;
    },
    updatePost(data: {id: number, title?: string, body?: string}): string {
        if (!data.title) {
            return `UPDATE comments SET body = ${data.body} WHERE id = ${data.id}`;
        } else if (!data.body) {
            return `UPDATE comments SET title = ${data.title} WHERE id = ${data.id}`;
        } else {
            return `UPDATE comments SET body = ${data.body} title = ${data.title} WHERE id = ${data.id}`;
        }
    },
    deletePost(id: number): string {
        return `DELETE FROM posts WHERE id = ${id}`;
    },
    createUsersTable: `CREATE TABLE users (
        id INT NOT NULL,
        name STRING,
        email STRING,
        password STRING
        PRIMARY KEY (id)
    )`,
    insertUser(user: User): string {
        /**
         * I'm not adding the user ID here because I intend to make the ID increment
         * automatically
         */
        return (
            `INSERT INTO users
            (name, email, password)
            VALUES
            (${user.name}, ${user.email}, ${user.password})`
        );
    },
    getUser(id: number): string {
        return `SELECT * FROM users WHERE id = ${id}`;
    },
    updateUserName(data: {id: number, name: string}): string {
        return `UPDATE users SET name = ${data.name} WHERE id = ${data.id}`;
    },
    deleteUser(id: number): string {
        return `DELETE FROM users WHERE id = ${id}`;
    },
}

export default queryBuilder;
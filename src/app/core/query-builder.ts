import { Post } from "../../modules/posts/models/post";

export const queryBuilder = {
    createCommentsTable: `CREATE TABLE comments (
        id INT NOT NULL,
        authorID INT,
        postID INT,
        timeCreated STRING,
        body STRING,
        PRIMARY KEY (id),
        FOREIGN KEY (authorID) REFERENCES users(id),
        FOREIGN KEY (postID) REFERENCES posts(id),
    )`,
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
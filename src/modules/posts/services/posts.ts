import users from "../../users/services/users";
import { Post } from "../models/post";
import comments from "./comments";

const posts: Post[] = [
    {
        id: 1,
        title: '5 best languages for backend development',
        body: 'Any youtube video you see with a title that looks like this is prolly trash',
        author: users.filter((user) => user.id === 1)[0],
        timeCreated: '11:30am',
        comments: comments.filter((comment) => comment.postID === 1)
    },
    {
        id: 2,
        title: '5 best languages for backend development',
        body: 'Any youtube video you see with a title that looks like this is prolly trash',
        author: users.filter((user) => user.id === 1)[0],
        timeCreated: '11:30am',
        comments: comments.filter((comment) => comment.postID === 2)
    },
    {
        id: 3,
        title: '5 best languages for backend development',
        body: 'Any youtube video you see with a title that looks like this is prolly trash',
        author: users.filter((user) => user.id === 1)[0],
        timeCreated: '11:30am',
        comments: comments.filter((comment) => comment.postID === 3)
    },
    {
        id: 4,
        title: '5 best languages for backend development',
        body: 'Any youtube video you see with a title that looks like this is prolly trash',
        author: users.filter((user) => user.id === 1)[0],
        timeCreated: '11:30am',
        comments: comments.filter((comment) => comment.postID === 4)
    },
    {
        id: 5,
        title: '5 best languages for backend development',
        body: 'Any youtube video you see with a title that looks like this is prolly trash',
        author: users.filter((user) => user.id === 1)[0],
        timeCreated: '11:30am',
        comments: comments.filter((comment) => comment.postID === 5)
    },
    {
        id: 6,
        title: '5 best languages for backend development',
        body: 'Any youtube video you see with a title that looks like this is prolly trash',
        author: users.filter((user) => user.id === 2)[0],
        timeCreated: '11:30am',
        comments: comments.filter((comment) => comment.postID === 6)
    },
    {
        id: 7,
        title: '5 best languages for backend development',
        body: 'Any youtube video you see with a title that looks like this is prolly trash',
        author: users.filter((user) => user.id === 2)[0],
        timeCreated: '11:30am',
        comments: comments.filter((comment) => comment.postID === 7)
    },
    {
        id: 8,
        title: '5 best languages for backend development',
        body: 'Any youtube video you see with a title that looks like this is prolly trash',
        author: users.filter((user) => user.id === 2)[0],
        timeCreated: '11:30am',
        comments: comments.filter((comment) => comment.postID === 8)
    },
    {
        id: 9,
        title: '5 best languages for backend development',
        body: 'Any youtube video you see with a title that looks like this is prolly trash',
        author: users.filter((user) => user.id === 2)[0],
        timeCreated: '11:30am',
        comments: comments.filter((comment) => comment.postID === 9)
    },
    {
        id: 10,
        title: '5 best languages for backend development',
        body: 'Any youtube video you see with a title that looks like this is prolly trash',
        author: users.filter((user) => user.id === 2)[0],
        timeCreated: '11:30am',
        comments: comments.filter((comment) => comment.postID === 10)
    },
    {
        id: 11,
        title: '5 best languages for backend development',
        body: 'Any youtube video you see with a title that looks like this is prolly trash',
        author: users.filter((user) => user.id === 3)[0],
        timeCreated: '11:30am',
        comments: comments.filter((comment) => comment.postID === 11)
    },
    {
        id: 12,
        title: '5 best languages for backend development',
        body: 'Any youtube video you see with a title that looks like this is prolly trash',
        author: users.filter((user) => user.id === 3)[0],
        timeCreated: '11:30am',
        comments: comments.filter((comment) => comment.postID === 12)
    },
    {
        id: 13,
        title: '5 best languages for backend development',
        body: 'Any youtube video you see with a title that looks like this is prolly trash',
        author: users.filter((user) => user.id === 3)[0],
        timeCreated: '11:30am',
        comments: comments.filter((comment) => comment.postID === 13)
    },
    {
        id: 14,
        title: '5 best languages for backend development',
        body: 'Any youtube video you see with a title that looks like this is prolly trash',
        author: users.filter((user) => user.id === 3)[0],
        timeCreated: '11:30am',
        comments: comments.filter((comment) => comment.postID === 14)
    },
    {
        id: 15,
        title: '5 best languages for backend development',
        body: 'Any youtube video you see with a title that looks like this is prolly trash',
        author: users.filter((user) => user.id === 3)[0],
        timeCreated: '11:30am',
        comments: comments.filter((comment) => comment.postID === 15)
    },
    {
        id: 16,
        title: '5 best languages for backend development',
        body: 'Any youtube video you see with a title that looks like this is prolly trash',
        author: users.filter((user) => user.id === 4)[0],
        timeCreated: '11:30am',
        comments: comments.filter((comment) => comment.postID === 16)
    },
    {
        id: 17,
        title: '5 best languages for backend development',
        body: 'Any youtube video you see with a title that looks like this is prolly trash',
        author: users.filter((user) => user.id === 4)[0],
        timeCreated: '11:30am',
        comments: comments.filter((comment) => comment.postID === 17)
    },
    {
        id: 18,
        title: '5 best languages for backend development',
        body: 'Any youtube video you see with a title that looks like this is prolly trash',
        author: users.filter((user) => user.id === 4)[0],
        timeCreated: '11:30am',
        comments: comments.filter((comment) => comment.postID === 18)
    },
    {
        id: 19,
        title: '5 best languages for backend development',
        body: 'Any youtube video you see with a title that looks like this is prolly trash',
        author: users.filter((user) => user.id === 4)[0],
        timeCreated: '11:30am',
        comments: comments.filter((comment) => comment.postID === 19)
    },
    {
        id: 20,
        title: '5 best languages for backend development',
        body: 'Any youtube video you see with a title that looks like this is prolly trash',
        author: users.filter((user) => user.id === 4)[0],
        timeCreated: '11:30am',
        comments: comments.filter((comment) => comment.postID === 20)
    },
    {
        id: 21,
        title: '5 best languages for backend development',
        body: 'Any youtube video you see with a title that looks like this is prolly trash',
        author: users.filter((user) => user.id === 5)[0],
        timeCreated: '11:30am',
        comments: comments.filter((comment) => comment.postID === 21)
    },
    {
        id: 22,
        title: '5 best languages for backend development',
        body: 'Any youtube video you see with a title that looks like this is prolly trash',
        author: users.filter((user) => user.id === 5)[0],
        timeCreated: '11:30am',
        comments: comments.filter((comment) => comment.postID === 22)
    },
    {
        id: 23,
        title: '5 best languages for backend development',
        body: 'Any youtube video you see with a title that looks like this is prolly trash',
        author: users.filter((user) => user.id === 5)[0],
        timeCreated: '11:30am',
        comments: comments.filter((comment) => comment.postID === 23)
    },
    {
        id: 24,
        title: '5 best languages for backend development',
        body: 'Any youtube video you see with a title that looks like this is prolly trash',
        author: users.filter((user) => user.id === 5)[0],
        timeCreated: '11:30am',
        comments: comments.filter((comment) => comment.postID === 24)
    },
    {
        id: 25,
        title: '5 best languages for backend development',
        body: 'Any youtube video you see with a title that looks like this is prolly trash',
        author: users.filter((user) => user.id === 5)[0],
        timeCreated: '11:30am',
        comments: comments.filter((comment) => comment.postID === 25)
    },
    {
        id: 26,
        title: '5 best languages for backend development',
        body: 'Any youtube video you see with a title that looks like this is prolly trash',
        author: users.filter((user) => user.id === 6)[0],
        timeCreated: '11:30am',
        comments: comments.filter((comment) => comment.postID === 26)
    },
    {
        id: 27,
        title: '5 best languages for backend development',
        body: 'Any youtube video you see with a title that looks like this is prolly trash',
        author: users.filter((user) => user.id === 6)[0],
        timeCreated: '11:30am',
        comments: comments.filter((comment) => comment.postID === 27)
    },
    {
        id: 28,
        title: '5 best languages for backend development',
        body: 'Any youtube video you see with a title that looks like this is prolly trash',
        author: users.filter((user) => user.id === 6)[0],
        timeCreated: '11:30am',
        comments: comments.filter((comment) => comment.postID === 28)
    },
    {
        id: 29,
        title: '5 best languages for backend development',
        body: 'Any youtube video you see with a title that looks like this is prolly trash',
        author: users.filter((user) => user.id === 6)[0],
        timeCreated: '11:30am',
        comments: comments.filter((comment) => comment.postID === 29)
    },
    {
        id: 30,
        title: '5 best languages for backend development',
        body: 'Any youtube video you see with a title that looks like this is prolly trash',
        author: users.filter((user) => user.id === 6)[0],
        timeCreated: '11:30am',
        comments: comments.filter((comment) => comment.postID === 30)
    },
]

export default posts;
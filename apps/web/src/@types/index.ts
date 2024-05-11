export interface Post {
    id: string;
    title: string;
    body: string;
    tags: string[];
    author: string;
    likes: number;
    comments: string;
    created_at: Date;
    updated_at: Date;
}

export interface User {
    id: string;
    name: string;
    username: string;
    email: string;
    role: string;
    auth: string;
}

export interface UserAuth {
    id: string;
    user_id: string;
    password_hash: string;
    otp: string;
}

export interface Comment {
    id: string;
    post_id: string;
    user: string;
    content: string;
    parent_comment: string;
    created_at: Date;
    updated_at: Date;
}

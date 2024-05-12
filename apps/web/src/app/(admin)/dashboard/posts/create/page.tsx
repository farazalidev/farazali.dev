import type { HTMLAttributes } from 'react';
import React from 'react';

interface CreatePostProps extends HTMLAttributes<HTMLDivElement> {}

const CreatePost: React.FC<CreatePostProps> = ({ ...props }) => {
    return <div {...props}>CreatePost</div>;
};
export default CreatePost;

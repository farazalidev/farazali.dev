import React from 'react';
import { PostsData } from '../../../../components/Dashboard/PostsData';

interface PostsPageProps {}

const PostsPage: React.FC<PostsPageProps> = () => {
    return (
        <div>
            <PostsData />
        </div>
    );
};
export default PostsPage;

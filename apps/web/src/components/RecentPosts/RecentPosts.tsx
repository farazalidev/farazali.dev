import { Status } from '@repo/ui/components';
import { cn } from '@repo/ui/utils';
import type { HTMLAttributes } from 'react';
import React from 'react';

interface RecentPostsProps extends HTMLAttributes<HTMLDivElement> {}

export const RecentPosts: React.FC<RecentPostsProps> = ({ className, ...props }) => {
    return (
        <div className={cn('common_section rounded-xl text-primary-text', className)} {...props}>
            <Status>Recent Posts</Status>
        </div>
    );
};

interface PostCardProps {}

export const PostCard: React.FC<PostCardProps> = () => {
    return <div>PostCard</div>;
};

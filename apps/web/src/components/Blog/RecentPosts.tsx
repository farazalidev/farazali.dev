import { Status, Typography } from '@repo/ui/components';
import { cn } from '@repo/ui/utils';
import type { HTMLAttributes } from 'react';
import React from 'react';
import type { Post } from '../RecentPosts/dummyPosts.data';
import { postsData } from '../RecentPosts/dummyPosts.data';

interface BlogPostsProps extends HTMLAttributes<HTMLDivElement> {}

export const RecentPosts: React.FC<BlogPostsProps> = ({ className }) => {
    return (
        <div className={cn('common_section rounded-xl w-full h-full py-2', className)}>
            <Status>Recent Posts</Status>
            <div className='flex flex-col gap-7'>
                {postsData.map((post) => {
                    return <RecentPostCard key={post.title} post={post} />;
                })}
                {postsData.map((post) => {
                    return <RecentPostCard key={post.title} post={post} />;
                })}
                {postsData.map((post) => {
                    return <RecentPostCard key={post.title} post={post} />;
                })}
                {postsData.map((post) => {
                    return <RecentPostCard key={post.title} post={post} />;
                })}
                {postsData.map((post) => {
                    return <RecentPostCard key={post.title} post={post} />;
                })}
                {postsData.map((post) => {
                    return <RecentPostCard key={post.title} post={post} />;
                })}
            </div>
        </div>
    );
};

interface RecentPostCardProps extends HTMLAttributes<HTMLDivElement> {
    post: Post;
}

export const RecentPostCard: React.FC<RecentPostCardProps> = ({ post, ...props }) => {
    return (
        <article className='flex gap-3 justify-center' {...props}>
            <div className='flex flex-col gap-1 place-items-center'>
                <Typography as='span' className='text-white uppercase' size='lg' weight='bold'>
                    27
                </Typography>
                <Typography as='span' className='text-white uppercase' size='lg' weight='bold'>
                    May
                </Typography>
                <Typography as='span' className='vertical h-full' size='sm'>
                    @faraz
                </Typography>
            </div>

            <div className='flex flex-col gap-2'>
                <Typography as='h1' className='text-primary line-clamp-1' size='xl' weight='extra-bold'>
                    {post.title}
                </Typography>
                <Typography as='p' className='line-clamp-4' intent='ghost'>
                    {post.body}
                </Typography>
            </div>
        </article>
    );
};

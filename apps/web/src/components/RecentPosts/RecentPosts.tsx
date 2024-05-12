import { Status, Typography } from '@repo/ui/components';
import { cn } from '@repo/ui/utils';
import type { HTMLAttributes } from 'react';
import React from 'react';
// import groq from 'groq';
// import { client } from '../../lib/sanity/client';
// import type { SanityRecentPosts } from '../../lib/sanity/interface';
import { postsData, type Post } from './dummyPosts.data';

interface RecentPostsProps extends HTMLAttributes<HTMLDivElement> {}

export const MainPageRecentPosts: React.FC<RecentPostsProps> = ({ className, ...props }) => {
    return (
        <div className={cn('common_section rounded-xl text-primary-text', className)} {...props}>
            <Status>Recent Posts</Status>
            <div className='flex flex-col gap-3'>
                {postsData.slice(0, 3).map((post) => {
                    return <PostCard key={post.title} post={post} />;
                })}
            </div>
        </div>
    );
};

interface PostCardProps {
    post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
    // const fetchRecentPosts = async (): Promise<SanityRecentPosts[]> => {
    //     const data: SanityRecentPosts[] = await client.fetch(groq`*[_type=="post"] | order(_createdAt asc){
    //                     title,
    //                     _createdAt,
    //                     author,
    //                     categories }`);
    //     return data;
    // };

    return (
        <section className='flex flex-col gap-2 min-h-fit'>
            <Typography as='h2' className='line-clamp-1 text-primary' size='lg'>
                {post.title}
            </Typography>
            <Typography as='p' className='line-clamp-3' intent='ghost' size='sm'>
                {post.body}
            </Typography>
            <div className='flex justify-between place-items-center'>
                <Typography as='span' size='md'>
                    27 May 2024
                </Typography>
                <Typography as='span' intent='ghost' size='sm'>
                    @farazali
                </Typography>
            </div>
            <div className='flex place-items-center gap-1'>
                {post.tags.slice(0, 3).map((tag) => {
                    return (
                        <span className='border-[1px] border-primary rounded-full px-2 gap-2 w-fit' key={tag}>
                            {tag}
                        </span>
                    );
                })}
            </div>
        </section>
    );
};

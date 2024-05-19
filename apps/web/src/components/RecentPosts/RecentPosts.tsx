import { Title, Typography } from '@repo/ui/components';
import { cn } from '@repo/ui/utils';
import type { HTMLAttributes } from 'react';
import React from 'react';
import groq from 'groq';
import Link from 'next/link';
import { client } from '../../lib/sanity/client';
import type { SanityRecentPost } from '../../lib/sanity/interface';

interface RecentPostsProps extends HTMLAttributes<HTMLDivElement> {}

export const MainPageRecentPosts: React.FC<RecentPostsProps> = async ({ className, ...props }) => {
    const fetchRecentPosts = async (): Promise<SanityRecentPost[]> => {
        const data: SanityRecentPost[] | undefined = await client.fetch(groq`*[_type=="post"][0...3] | order(_createdAt desc) {
                title,
                summary,
                _createdAt,
                slug {
                current
                    },
                author -> { 
                name
                    },
                categories[]->{title}
}`);
        return data || [];
    };
    const result = await fetchRecentPosts();

    return (
        <div className={cn('common_section rounded-xl text-primary-text', className)} {...props}>
            <Title>Recent Posts</Title>
            <div className='flex flex-col gap-3'>
                {result.slice(0, 3).map((post) => {
                    return <PostCard key={post.title} post={post} />;
                })}
            </div>
        </div>
    );
};

interface PostCardProps {
    post: SanityRecentPost | undefined;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <section className='flex flex-col gap-2 min-h-fit'>
            <Link href={`blog/${post?.slug.current}`}>
                <Typography as='h2' className='line-clamp-1 text-primary'>
                    {post?.title}
                </Typography>
                <Typography as='p' className='line-clamp-3' intent='ghost'>
                    {post?.summary}
                </Typography>
                <div className='flex justify-between place-items-center'>
                    <Typography as='span'>27 May 2024</Typography>
                    <Typography as='span' intent='ghost'>
                        @{post?.author.name}
                    </Typography>
                </div>
            </Link>
            {post?.categories ? (
                <div className='flex place-items-center gap-1'>
                    {post.categories.slice(0, 3).map((tag) => {
                        return (
                            <span
                                className='border-[1px] border-primary rounded-full px-2 gap-2 w-fit hover:text-white hover:bg-primary'
                                key={tag.title}
                            >
                                {tag.title}
                            </span>
                        );
                    })}
                </div>
            ) : null}
        </section>
    );
};

import { Title } from '@repo/ui/components';
import { cn } from '@repo/ui/utils';
import type { HTMLAttributes } from 'react';
import React from 'react';
import groq from 'groq';
import type { SanityRecentPost } from '../../lib/sanity/interface';
import { client } from '../../lib/sanity/client';
import { RecentPostCard } from './RecentPostCard';

interface BlogPostsProps extends HTMLAttributes<HTMLDivElement> {}

const fetchRecentPosts = async (): Promise<SanityRecentPost[]> => {
    const data: SanityRecentPost[] | undefined = await client.fetch(
        groq`*[_type=="post"] | order(_createdAt desc) {
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
}`,
    );
    return data || [];
};

export const RecentPosts: React.FC<BlogPostsProps> = async ({ className }) => {
    const result = await fetchRecentPosts();

    return (
        <div className={cn('common_section rounded-xl w-full h-full py-2', className)}>
            <Title>Recent Posts</Title>
            <div className='flex flex-col gap-7'>
                {result.map((post) => {
                    return <RecentPostCard key={post.title} post={post} />;
                })}
            </div>
        </div>
    );
};

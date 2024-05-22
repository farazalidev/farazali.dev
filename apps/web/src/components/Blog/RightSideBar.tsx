import { Title, Typography } from '@repo/ui/components';
import { cn } from '@repo/ui/utils';
import type { HTMLAttributes } from 'react';
import React from 'react';
import { FaEye } from 'react-icons/fa';
import { LuTrendingUp } from 'react-icons/lu';
import Image from 'next/image';
import groq from 'groq';
import { postsData, type Post } from '../RecentPosts/dummyPosts.data';
import { Fixed } from '../../utils/Fixed';
import type { Category } from '../../lib/sanity/article';
import { client } from '../../lib/sanity/client';
import { CategoryTag } from './CategoryTag';

interface RightSideBarProps extends HTMLAttributes<HTMLDivElement> {}

export const RightSideBar: React.FC<RightSideBarProps> = async ({ className, ...props }) => {
    const fetchAllTags = async (): Promise<Category[]> => {
        const tagsResponse: Category[] = await client.fetch(groq`
        *[_type == "category"] {
        ...,
        "count": count(*[_type == "post" && references(^._id)])
        } | order(count desc) [0...10]
        `);
        return tagsResponse;
    };

    const tags = await fetchAllTags();

    return (
        <Fixed as='aside' className={cn('rounded-xl', className)} {...props}>
            <div className='h-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-2'>
                <div className='common_section rounded-t-xl h-full'>
                    <Title>About Me</Title>
                    <div className='flex place-items-center justify-center lg:flex-col'>
                        <div className='flex flex-col gap-2 text-nowrap'>
                            <Image alt='profile' className='rounded-full' height={100} src='/profile.jpg' width={100} />
                            <Typography as='p' intent='ghost-xl'>
                                Full Stack Dev
                            </Typography>
                        </div>
                        <Typography as='p' className='mt-3 text-balance text-center' intent='ghost'>
                            Full Stack Developer proficient in crafting seamless web applications from design to deployment. Skilled in
                            React.js, Node.js, and dedicated to problem-solving.
                        </Typography>
                    </div>
                </div>

                <div className='common_section h-full'>
                    <Title>Trending Posts</Title>
                    <div className='gap-4 h-full flex flex-col mt-3'>
                        {postsData.slice(0, 2).map((post) => {
                            return <TrendingPostCard key={post.title} post={post} />;
                        })}
                    </div>
                </div>

                <div className='common_section rounded-b-xl h-full'>
                    <Title>Tags</Title>
                    <div className='flex flex-wrap gap-3 mt-3'>
                        {tags.slice(0, 15).map((tag) => {
                            return <CategoryTag key={tag.title} tag={tag} />;
                        })}
                    </div>
                </div>
            </div>
        </Fixed>
    );
};

interface TrendingPostCardProps extends HTMLAttributes<HTMLDivElement> {
    post: Post;
}

export const TrendingPostCard: React.FC<TrendingPostCardProps> = ({ post, ...props }) => {
    return (
        <div {...props}>
            <div className='flex place-items-center justify-between'>
                <Typography as='span'>27 May 2024</Typography>
                <div className='flex place-items-center gap-2'>
                    <Typography as='p' className='flex place-items-center gap-2'>
                        <FaEye />
                        <span>37.5k</span>
                    </Typography>
                    <Typography as='p' className='flex place-items-center gap-2'>
                        <LuTrendingUp />
                        <span>15.2k</span>
                    </Typography>
                </div>
            </div>
            <Typography as='h2' className='text-primary line-clamp-1' intent='ghost'>
                {post.title}
            </Typography>
            <Typography as='h2' className='line-clamp-3' intent='ghost-xl'>
                {post.body}
            </Typography>
        </div>
    );
};

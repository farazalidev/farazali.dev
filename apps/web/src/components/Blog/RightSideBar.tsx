import { Status, Typography } from '@repo/ui/components';
import { cn } from '@repo/ui/utils';
import type { HTMLAttributes } from 'react';
import React from 'react';
import { FaEye } from 'react-icons/fa';
import { LuTrendingUp } from 'react-icons/lu';
import Image from 'next/image';
import { postsData, type Post } from '../RecentPosts/dummyPosts.data';
import type { PostTag } from './Tags.data';
import { tagsData } from './Tags.data';

interface RightSideBarProps extends HTMLAttributes<HTMLDivElement> {}

export const RightSideBar: React.FC<RightSideBarProps> = ({ className, ...props }) => {
    return (
        <aside className={cn('rounded-xl', className)} {...props}>
            <div className='h-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-2'>
                <div className='common_section rounded-t-xl h-full'>
                    <Status>About Me</Status>
                    <div className='flex place-items-center justify-center lg:flex-col'>
                        <div className='flex flex-col gap-2 text-nowrap'>
                            <Image alt='profile' className='rounded-full' height={100} src='/profile.jpg' width={100} />
                            <Typography as='p' intent='ghost-xl' size='sm'>
                                Full Stack Dev
                            </Typography>
                        </div>
                        <Typography as='p' className='mt-3 text-balance text-center' intent='ghost' size='sm'>
                            Full Stack Developer proficient in crafting seamless web applications from design to deployment. Skilled in
                            React.js, Node.js, and dedicated to problem-solving.
                        </Typography>
                    </div>
                </div>

                <div className='common_section h-full'>
                    <Status>Trending Posts</Status>
                    <div className='gap-4 h-full flex flex-col mt-3'>
                        {postsData.slice(0, 2).map((post) => {
                            return <TrendingPostCard key={post.title} post={post} />;
                        })}
                    </div>
                </div>

                <div className='common_section rounded-b-xl h-full'>
                    <Status>Tags</Status>
                    <div className='flex flex-wrap gap-3 mt-3'>
                        {tagsData.slice(0, 15).map((tag) => {
                            return <Tag key={tag.topic} tag={tag} />;
                        })}
                    </div>
                </div>
            </div>
        </aside>
    );
};

interface TrendingPostCardProps extends HTMLAttributes<HTMLDivElement> {
    post: Post;
}

export const TrendingPostCard: React.FC<TrendingPostCardProps> = ({ post, ...props }) => {
    return (
        <div {...props}>
            <div className='flex place-items-center justify-between'>
                <Typography as='span' size='md'>
                    27 May 2024
                </Typography>
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
            <Typography as='h2' className='text-primary line-clamp-1' intent='ghost' size='md'>
                {post.title}
            </Typography>
            <Typography as='h2' className='line-clamp-3' intent='ghost-xl' size='sm'>
                {post.body}
            </Typography>
        </div>
    );
};

interface TagProps extends HTMLAttributes<HTMLDivElement> {
    tag: PostTag;
}

export const Tag: React.FC<TagProps> = ({ tag, className, ...props }) => {
    return (
        <div
            className={cn(
                'border-[1px] hover:bg-primary hover:text-primary-text cursor-pointer border-primary rounded-full px-2 py-1 gap-2 w-fit flex place-items-center',
                className,
            )}
            {...props}
        >
            <Typography as='span' size='sm'>
                {tag.topic.length < 8 ? tag.topic : `${tag.topic.slice(0, 7)}...`}
            </Typography>
            <Typography as='span' intent='ghost' size='sm'>
                {tag.totalPosts}
            </Typography>
        </div>
    );
};

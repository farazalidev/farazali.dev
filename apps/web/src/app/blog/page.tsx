'use client';
import React from 'react';
import { useDetectScroll } from '@repo/ui/hooks';
import { cn } from '@repo/ui/utils';
import { RecentPosts, RightSideBar, SideBar } from '@components';

interface BlogPageProps {}

const BlogPage: React.FC<BlogPageProps> = () => {
    const { collide } = useDetectScroll({ height: 100 });

    return (
        <div className='h-full text-primary-text grid gap-2 grid-cols-12'>
            <SideBar
                className={cn('md:col-span-2 lg:col-span-2 xl:col-span-1 hidden md:flex', collide ? 'md:sticky md:top-0 md:left-0' : '')}
            />
            <RecentPosts className='col-span-12 md:col-span-10 lg:col-span-10 xl:col-span-7' />
            <RightSideBar className={cn('hidden xl:flex xl:col-span-4 max-h-fit h-fit', collide ? 'xl:sticky xl:top-0 xl:right-0' : '')} />
        </div>
    );
};
export default BlogPage;

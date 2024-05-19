import React from 'react';
import { cn } from '@repo/ui/utils';
import { RecentPosts, RightSideBar, SideBar } from '@components';

interface BlogPageProps {}

const BlogPage: React.FC<BlogPageProps> = () => {
    return (
        <div className='h-full text-primary-text grid gap-2 grid-cols-12'>
            <SideBar className={cn('md:col-span-2 lg:col-span-2 xl:col-span-1 hidden md:flex')} />
            <RecentPosts className='col-span-12 md:col-span-10 lg:col-span-10 xl:col-span-7' />
            <RightSideBar className={cn('col-span-12 md:flex md:col-start-3 md:col-end-13 xl:col-span-4 max-h-fit h-fit')} />
        </div>
    );
};
export default BlogPage;

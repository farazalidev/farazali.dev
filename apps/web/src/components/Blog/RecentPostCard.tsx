'use client';
import { Typography } from '@repo/ui/components';
import { cn } from '@repo/ui/utils';
import Link from 'next/link';
import type { HTMLAttributes } from 'react';
import type { SanityRecentPost } from '../../lib/sanity/interface';

interface RecentPostCardProps extends HTMLAttributes<HTMLDivElement> {
    post: SanityRecentPost | undefined;
}

export const RecentPostCard: React.FC<RecentPostCardProps> = ({ post, className, ...props }) => {
    return (
        <Link href={`blog/${encodeURIComponent(post?.slug.current || '')}`}>
            <article className={cn('flex gap-3 justify-center overflow-hidden', className)} {...props}>
                <div className='flex flex-col gap-1 place-items-center'>
                    <Typography as='span' className='text-white uppercase' weight='bold'>
                        {new Date(post?._createdAt || '').getDate()}
                    </Typography>
                    <Typography as='span' className='text-white uppercase' weight='bold'>
                        {new Date(post?._createdAt || '').toLocaleDateString('default', { month: 'long' })}
                    </Typography>
                    <Typography as='span' className='vertical'>
                        @{post?.author.name}
                    </Typography>
                </div>
                <div className='flex flex-col gap-2'>
                    <Typography as='h1' className='text-primary line-clamp-1' weight='extra-bold'>
                        {post?.title}
                    </Typography>
                    <Typography as='p' className='line-clamp-4' intent='ghost'>
                        {post?.summary}
                    </Typography>
                </div>
            </article>
        </Link>
    );
};

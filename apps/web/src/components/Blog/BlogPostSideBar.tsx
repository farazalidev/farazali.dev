import { Title, Typography } from '@repo/ui/components';
import { cn } from '@repo/ui/utils';
import type { HTMLAttributes } from 'react';
import React from 'react';
import Image from 'next/image';
import Markdown from 'markdown-to-jsx';
import type { Article } from '../../lib/sanity/article';
import { Fixed } from '../../utils/Fixed';
import { GetTOC } from '../../utils/GetToc';
import { Tag } from './RightSideBar';
import { tagsData } from './Tags.data';
import { Toc } from './Toc';

interface BlogPostSideBarProps extends HTMLAttributes<HTMLDivElement> {
    article: Article | undefined;
}

export const BlogPostSideBar: React.FC<BlogPostSideBarProps> = ({ className, ...props }) => {
    return (
        <Fixed as='aside' className={cn('rounded-xl', className)} {...props}>
            <div className='h-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-2'>
                <div className='common_section rounded-t-xl h-full'>
                    <Title>About Me</Title>
                    <div className='flex place-items-center justify-center lg:flex-col'>
                        <div className='flex flex-col gap-2 text-nowrap'>
                            <Image
                                alt='profile'
                                className='rounded-full'
                                height={100}
                                src={props.article?.author.image.asset.url || ''}
                                width={100}
                            />
                            <Typography as='p' intent='ghost-xl'>
                                {props.article?.author.profession}
                            </Typography>
                        </div>
                        <Typography as='div' className='mt-3 text-pretty text-center' intent='ghost'>
                            {props.article?.author.bio ? (
                                <Markdown key='author-bio' options={{}}>
                                    {props.article.author.bio}
                                </Markdown>
                            ) : null}
                        </Typography>
                    </div>
                </div>
                <div className='common_section h-full'>
                    <Title>Table of Content</Title>
                    <Toc tokens={GetTOC(props.article?.md)} />
                </div>
                <div className='common_section rounded-b-xl h-full'>
                    <Title>Tags</Title>
                    <div className='flex flex-wrap gap-3 mt-3'>
                        {tagsData.slice(0, 15).map((tag) => {
                            return <Tag key={tag.topic} tag={tag} />;
                        })}
                    </div>
                </div>
            </div>
        </Fixed>
    );
};

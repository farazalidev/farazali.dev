import { cn } from '@repo/ui/utils';
import type { HTMLAttributes } from 'react';
import React from 'react';
import { Title, Typography } from '@repo/ui/components';
import Markdown from 'markdown-to-jsx';
import Image from 'next/image';
import type { Article } from '../../lib/sanity/article';
import { GetTOC } from '../../utils/GetToc';
import { MarkdownHeading } from './MarkdownHeading';
import { Toc } from './Toc';
import { Comments } from './Comments';

interface PostProps extends HTMLAttributes<HTMLDivElement> {
    article: Article;
}

export const Post: React.FC<PostProps> = ({ className, ...props }) => {
    return (
        <div
            className={cn(
                'common_section rounded-xl text-primary-text flex flex-col max-w-full',
                'prose prose-headings:text-primary-text prose-li:text-primary-text',
                'prose-table:bg-gray-700 prose-td:p-2 prose-td:border-[1px] prose-th:border-[1px] prose-ol:text-primary-text',
                'prose-strong:text-primary-text prose-blockquote:text-primary',
                'sm:prose-blockquote:text-xs sm:prose-sm lg:prose-blockquote:text-base prose-a:text-primary-text',
                className,
            )}
            {...props}
        >
            <Typography as='h1' className='text-ellipsis' intent='ghost' weight='bold'>
                {props.article.title}
            </Typography>

            <Image
                alt={props.article.title}
                className='rounded-xl m-0'
                height={500}
                layout='responsive'
                sizes='(max-width: 768px) 100vw, (max-width: 800px) 50vw, 33vw'
                src={props.article.mainImage.asset.url}
                width={500}
            />

            <div className='sm:flex sm:flex-col xl:hidden my-2'>
                <Title className='w-fit h-fit'>Table of Content</Title>
                <Toc tokens={GetTOC(props.article.md)} />
            </div>

            <div>
                <Markdown
                    key={props.article.title}
                    options={{
                        forceWrapper: true,
                        overrides: {
                            h1: {
                                component: MarkdownHeading,
                                props: {
                                    elementType: 'h1',
                                },
                            },
                            h2: {
                                component: MarkdownHeading,
                                props: {
                                    elementType: 'h2',
                                },
                            },
                            h3: {
                                component: MarkdownHeading,
                                props: {
                                    elementType: 'h3',
                                },
                            },
                            h4: {
                                component: MarkdownHeading,
                                props: {
                                    elementType: 'h4',
                                },
                            },
                            h5: {
                                component: MarkdownHeading,
                                props: {
                                    elementType: 'h5',
                                },
                            },
                            h6: {
                                component: MarkdownHeading,
                                props: {
                                    elementType: 'h6',
                                },
                            },
                        },
                    }}
                >
                    {props.article.md}
                </Markdown>
            </div>
            <Comments />
        </div>
    );
};

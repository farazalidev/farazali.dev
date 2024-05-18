import { cn } from '@repo/ui/utils';
import type { HTMLAttributes } from 'react';
import React from 'react';
import { Typography } from '@repo/ui/components';
import Markdown from 'markdown-to-jsx';
import Image from 'next/image';
import type { Article } from '../../lib/sanity/article';
import { MarkdownHeading } from './MarkdownHeading';

interface PostProps extends HTMLAttributes<HTMLDivElement> {
    article: Article;
}

export const Post: React.FC<PostProps> = ({ className, ...props }) => {
    return (
        <div
            className={cn(
                'common_section rounded-xl text-primary-text flex flex-col prose max-w-full text-pretty',
                ' prose-headings:text-primary-text prose-li:text-primary-text prose-strong:text-primary-text prose-blockquote:text-primary',
                'prose-table:bg-gray-700 prose-td:p-2 prose-td:border-[1px] prose-th:border-[1px] prose-ol:text-primary-text',
                className,
            )}
            {...props}
        >
            <Typography as='h1' intent='ghost' weight='bold'>
                {props.article.title}
            </Typography>

            <div className='w-fit min-w-full rounded-xl min-h-[500px] h-fit relative overflow-hidden m-0'>
                <Image alt='main image' className='rounded-xl m-0' fill objectFit='fill' src={props.article.mainImage.asset.url} />
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
        </div>
    );
};

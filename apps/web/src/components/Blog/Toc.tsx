'use client';
import { cn } from '@repo/ui/utils';
/* eslint-disable no-useless-escape -- ignore*/
import type { Token } from 'marked';
import Link from 'next/link';
import type { HTMLAttributes } from 'react';
import React, { useEffect, useState } from 'react';

export type HeadingList = Token[] & {
    depth: number;
    text: string;
};

interface TocProps extends HTMLAttributes<HTMLDivElement> {
    tokens: HeadingList[];
}

export const Toc: React.FC<TocProps> = ({ ...props }) => {
    const [isClient, setIsClient] = useState(false);

    const [currentPath, setCurrentPath] = useState(window.location.href);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        const handleScroll = (): void => {
            setCurrentPath(window.location.href);
        };

        window.onscroll = handleScroll;
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return isClient ? (
        <div className='text-primary-text' {...props}>
            {props.tokens.map((heading) => (
                <li data-depth={heading.depth} key={heading.text}>
                    <Link
                        className={cn(decodeURIComponent(currentPath).split('#')[1] === heading.text ? 'text-primary' : '')}
                        href={`#${heading.text
                            .replace(/ /g, '-')
                            .replace(/[\/\\^$*+?.()|\[\]{}<>:;"'~,=@`#!%&]/g, '')
                            .toLowerCase()}`}
                    >
                        <Link href={`#${heading.text}`}>{heading.text}</Link>
                    </Link>
                </li>
            ))}
        </div>
    ) : null;
};

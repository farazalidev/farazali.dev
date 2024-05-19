'use client';
/* eslint-disable no-useless-escape -- ignore*/
import { cn } from '@repo/ui/utils';
import type { Token } from 'marked';
import Link from 'next/link';
import type { HTMLAttributes } from 'react';
import React, { useEffect, useState } from 'react';

export type HeadingList = Token[] & {
    depth: number;
    text: string;
};

export interface TocProps extends HTMLAttributes<HTMLDivElement> {
    tokens: HeadingList[];
}

export const Toc: React.FC<TocProps> = ({ ...props }) => {
    // eslint-disable-next-line react/hook-use-state -- its destructured
    const [_window, setWindowObject] = useState<Window | null>(null);

    const [currentPath, setCurrentPath] = useState(_window?.location.href);

    useEffect(() => {
        // you can access window, document here.
        setWindowObject(window);
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

    return (
        <div className='text-primary-text' {...props}>
            {props.tokens.map((heading) => (
                <li data-depth={heading.depth} key={heading.text}>
                    <Link
                        className={cn(decodeURIComponent(currentPath || '').split('#')[1] === heading.text ? 'text-primary' : '')}
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
    );
};

export const dynamic = 'force-dynamic';

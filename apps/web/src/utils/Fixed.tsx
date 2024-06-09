'use client';
import { useDetectScroll } from '@repo/ui/hooks';
import { cn } from '@repo/ui/utils';
import type { HTMLAttributes } from 'react';
import React from 'react';

interface FixedProps extends HTMLAttributes<HTMLDivElement> {
    as: 'aside' | 'div' | 'span' | 'article';
}

export const Fixed: React.FC<FixedProps> = ({ className, children, ...props }) => {
    const { collide } = useDetectScroll({ height: 100 });

    return (
        <props.as className={cn(className, collide ? 'md:sticky md:top-1 md:right-0' : '')} {...props}>
            {children}
        </props.as>
    );
};

import { cn } from '@repo/ui/utils';
import type { HTMLAttributes } from 'react';
import React from 'react';

interface HighlightTextProps extends HTMLAttributes<HTMLSpanElement> {
    children: string;
    highlight: string;
}

export const HighlightText: React.FC<HighlightTextProps> = ({ children, highlight, className, ...props }) => {
    const parts = children.split(new RegExp(`(${highlight})`, 'gi'));
    return highlight.length > 0 ? (
        <span className={cn(className)} {...props}>
            {parts.map((part, i) => (
                <span
                    key={i}
                    style={
                        part.toLowerCase() === highlight.toLowerCase()
                            ? { fontWeight: 'bold', backgroundColor: 'yellow', color: 'black', paddingLeft: '2px', paddingRight: '2px' }
                            : {}
                    }
                >
                    {part}
                </span>
            ))}{' '}
        </span>
    ) : (
        <span className={className} {...props}>
            {children}
        </span>
    );
};

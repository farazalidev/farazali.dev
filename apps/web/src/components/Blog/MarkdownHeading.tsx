'use client';
import { useEffect, useState, type HTMLAttributes } from 'react';

interface MarkdownHeadingProps extends HTMLAttributes<HTMLDivElement> {
    elementType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const MarkdownHeading: React.FC<MarkdownHeadingProps> = ({ ...props }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return isClient ? (
        <props.elementType className='prose toc-heading' id={`${props.children as string[][0]}`}>
            {props.children}
        </props.elementType>
    ) : null;
};

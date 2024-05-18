import type { ReactNode } from 'react';
import React from 'react';

export default function BlogPostLayout({ children }: { children: ReactNode }): ReactNode {
    return <div className='w-full h-full'>{children}</div>;
}

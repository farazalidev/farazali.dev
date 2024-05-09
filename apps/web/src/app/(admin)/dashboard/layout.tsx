import type { ReactNode } from 'react';
import React from 'react';

export default function DashboardPageLayout({ children }: { children: ReactNode }): ReactNode {
    return <div className='text-primary-text'>{children}</div>;
}

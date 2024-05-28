import type { ReactNode } from 'react';
import React from 'react';
import type { Metadata } from 'next';
import { Footer, Header } from '../../components';
import CommonLayout from '../commonLayout';

export const metadata: Metadata = {
    title: 'Faraz Ali',
    description: 'Personal Portfolio website for faraz ali dev',
    robots: 'index, follow',
    creator: 'Faraz Ali',
    category: 'Personal Website and Blog',
};

export default function PublicLayout({ children }: { children: ReactNode }): ReactNode {
    return (
        <CommonLayout>
            <Header />
            {children}
            <Footer />
        </CommonLayout>
    );
}

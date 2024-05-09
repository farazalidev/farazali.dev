import type { ReactNode } from 'react';
import React from 'react';
import { Footer, Header } from '../../components';
import CommonLayout from '../commonLayout';

export default function PublicLayout({ children }: { children: ReactNode }): ReactNode {
    return (
        <CommonLayout>
            <Header />
            {children}
            <Footer />
        </CommonLayout>
    );
}

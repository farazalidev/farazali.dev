import type { ReactNode } from 'react';
import React from 'react';
import { AdminHeader, DashboardSidebar } from '@components';
import CommonLayout from '../commonLayout';

export default function AdminLayout({ children }: { children: ReactNode }): ReactNode {
    return (
        <CommonLayout>
            <main className='grid grid-cols-12 gap-4'>
                <AdminHeader className='col-span-12 h-full' />
                <DashboardSidebar className='col-span-2  common_section rounded-xl min-h-[500px]' />
                <div className='col-span-10 common_section text-primary-text rounded-xl min-h-[500px]'>{children}</div>
            </main>
        </CommonLayout>
    );
}

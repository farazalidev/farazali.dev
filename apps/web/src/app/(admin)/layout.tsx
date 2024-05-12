import type { ReactNode } from 'react';
import React from 'react';
import { headers } from 'next/headers';
import { AdminHeader, DashboardSidebar } from '@components';
import CommonLayout from '../commonLayout';
import { getLocation } from '../../utils/getLocation';
import { cn } from '@repo/ui/utils';

export default function AdminLayout({ children }: { children: ReactNode }): ReactNode {
    const headersList = headers();
    const fullUrl = headersList.get('referer') || '';

    const url = getLocation(fullUrl);
    console.log('🚀 ~ AdminLayout ~ url:', url);

    return (
        <CommonLayout>
            <main className='grid grid-cols-12 gap-4'>
                <AdminHeader className='col-span-12 h-full' />
                {url?.pathname === '/dashboard/posts/create' ? null : (
                    <DashboardSidebar className='col-span-2  common_section rounded-xl min-h-[500px]' />
                )}
                <div
                    className={cn(
                        'common_section text-primary-text rounded-xl min-h-[500px]',
                        url?.pathname === '/dashboard/posts/create' ? 'col-span-12' : 'col-span-10 ',
                    )}
                >
                    {children}
                </div>
            </main>
        </CommonLayout>
    );
}

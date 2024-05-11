import { cn } from '@repo/ui/utils';
import type { HTMLAttributes } from 'react';
import React from 'react';
import { LuLogOut } from 'react-icons/lu';
import { MdAnalytics, MdCategory } from 'react-icons/md';
import { RiLayout3Fill } from 'react-icons/ri';
import { IoSettings } from 'react-icons/io5';
import { DashboardSidebarIcon } from './DashBoardSidebarIcon';

interface DashboardSidebarProps extends HTMLAttributes<HTMLDivElement> {}

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ className, ...props }) => {
    return (
        <aside className={cn('flex flex-col gap-4 place-content-between', className)} {...props}>
            <div className='h-full flex flex-col gap-7'>
                <DashboardSidebarIcon Icon={<MdAnalytics size={25} />} href='/dashboard/analytics' label='Analytics' />
                <DashboardSidebarIcon Icon={<RiLayout3Fill size={25} />} href='/dashboard/posts' label='Posts' />
                <DashboardSidebarIcon Icon={<MdCategory size={25} />} href='/dashboard/tags' label='Tags' />
                <DashboardSidebarIcon Icon={<IoSettings size={25} />} href='/dashboard/settings' label='Settings' />
            </div>
            <div className='w-full flex justify-center place-items-center gap-2 py-2 rounded-full bg-secondary-border text-primary-text'>
                <span>Logout</span> <LuLogOut />
            </div>
        </aside>
    );
};

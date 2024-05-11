'use client';
import { cn } from '@repo/ui/utils';
import Image from 'next/image';
import type { HTMLAttributes } from 'react';
import React from 'react';
import { FaBell } from 'react-icons/fa';

interface AdminHeaderProps extends HTMLAttributes<HTMLHeadElement> {}

export const AdminHeader: React.FC<AdminHeaderProps> = ({ className, ...props }) => {
    return (
        <header
            className={cn('flex justify-between place-items-center common_section rounded-full text-primary-text', className)}
            {...props}
        >
            <div className='flex justify-center place-items-center gap-4'>
                <Image alt='logo' height={45} loading='lazy' src='/farazalidev_logo.svg' width={45} />
                <h1 className='text-primary text-xl md:text-2xl font-bold'>Dashboard</h1>
            </div>

            <nav className='flex place-items-center justify-between'>
                <FaBell size={22} />
            </nav>
        </header>
    );
};

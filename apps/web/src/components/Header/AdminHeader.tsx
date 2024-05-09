'use client';
import { Input } from '@repo/ui/components';
import { cn } from '@repo/ui/utils';
import Image from 'next/image';
import type { ChangeEvent, HTMLAttributes } from 'react';
import React, { useState } from 'react';
import { FaBell, FaSearch } from 'react-icons/fa';

interface AdminHeaderProps extends HTMLAttributes<HTMLHeadElement> {}

export const AdminHeader: React.FC<AdminHeaderProps> = ({ className, ...props }) => {
    const [searchValue, setSearchValue] = useState<string>();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
    };

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setSearchValue(e.target.value);
    };

    return (
        <header
            className={cn('flex justify-between place-items-center common_section rounded-full text-primary-text', className)}
            {...props}
        >
            <div className='flex justify-center place-items-center gap-4'>
                <Image alt='logo' height={45} loading='lazy' src='/farazalidev_logo.svg' width={45} />
                <h1 className='text-primary text-xl md:text-2xl font-bold'>Dashboard</h1>
            </div>

            <div>
                <Input
                    Icon={<FaSearch size={22} />}
                    dimensions='2xl'
                    iconsPosition='right'
                    inputType='withIcon'
                    isLabel={false}
                    onChange={handleSearchChange}
                    onIconClick={handleClick}
                    placeholder='Search'
                    value={searchValue}
                />
            </div>

            <nav className='flex place-items-center justify-between'>
                <FaBell size={22} />
            </nav>
        </header>
    );
};

import Image from 'next/image';
import React from 'react';
import { cn } from '@repo/ui/utils';
import { IoIosMenu } from 'react-icons/io';
import { NavLink } from '../Misc/NavLink';
import { headersData } from './headers.data';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
    return (
        <header
            className={cn([
                'flex place-items-center justify-between common_section min-h-[45px] md:min-h-[65px] mb-4',
                'transition-all duration-300 rounded-full',
                'backdrop-blur-2xl backdrop-filter',
                'bg-secondary_bg',
            ])}
        >
            <div className='flex justify-center place-items-center gap-4'>
                <Image alt='logo' height={45} loading='lazy' src='farazalidev_logo.svg' width={45} />
                <h1 className='text-primary text-xl md:text-2xl font-bold'>Faraz Ali</h1>
            </div>

            <nav className='flex justify-center place-items-center gap-4'>
                {/* desktop menu */}
                <div className='hidden md:block'>
                    {headersData.map((header) => {
                        return (
                            <NavLink href={header.location} key={header.label}>
                                {header.label}
                            </NavLink>
                        );
                    })}
                </div>

                {/* mobile menu */}

                <div className='md:hidden'>
                    <IoIosMenu className='text-primary-text' size={32} />
                </div>
            </nav>
        </header>
    );
};

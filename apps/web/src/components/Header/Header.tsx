import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { cn } from '@repo/ui/utils';
import { IoIosMenu } from 'react-icons/io';
import { headersData } from './headers.data';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
    return (
        <div
            className={cn([
                'flex place-items-center justify-between common_section min-h-[45px] md:min-h-[65px]',
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
                            <Link
                                className='text-primary-text hover:text-primary transition-colors duration-200 mr-3'
                                href={header.location}
                                key={header.label}
                            >
                                {header.label}
                            </Link>
                        );
                    })}
                </div>

                {/* mobile menu */}

                <div className='md:hidden'>
                    <IoIosMenu className='text-primary-text' size={32} />
                </div>
            </nav>
        </div>
    );
};

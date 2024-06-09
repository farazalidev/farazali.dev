import React from 'react';
import { cn } from '@repo/ui/utils';
// import { IoIosMenu } from 'react-icons/io';
import { NavLink } from '../Misc/NavLink';
import { Logo } from '../Misc/Logo';
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
            <Logo />

            <nav className='flex justify-center place-items-center gap-4'>
                {/* desktop menu */}
                <div>
                    {headersData.map((header) => {
                        return (
                            <NavLink href={header.location} key={header.label}>
                                {header.label}
                            </NavLink>
                        );
                    })}
                </div>

                {/* mobile menu */}

                {/* <div className='md:hidden'>
                    <IoIosMenu className='text-primary-text' size={32} />
                </div> */}
            </nav>
        </header>
    );
};

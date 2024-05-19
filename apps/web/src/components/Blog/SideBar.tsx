import { cn } from '@repo/ui/utils';
import type { HTMLAttributes } from 'react';
import React from 'react';
import { FaGithub, FaHome, FaLinkedin, FaSearch } from 'react-icons/fa';
import { FiPlusCircle } from 'react-icons/fi';
import { Fixed } from '../../utils/Fixed';

interface SideBarProps extends HTMLAttributes<HTMLDivElement> {}

export const SideBar: React.FC<SideBarProps> = ({ className }) => {
    return (
        <Fixed
            as='aside'
            className={cn(
                'common_section rounded-full text-primary-text min-w-[70px] w-full max-w-[100px] place-items-center justify-evenly min-h-[500px] max-h-fit h-fit text-center flex flex-col',
                className,
            )}
        >
            <span>
                <FaHome className='text-primary' size={25} />
            </span>
            <span>
                <FaSearch className='text-primary' size={25} />
            </span>
            <span>
                <FaLinkedin className='text-primary' size={25} />
            </span>
            <span>
                <FaGithub className='text-primary' size={25} />
            </span>
            <span>
                <FiPlusCircle className='text-primary' size={25} />
            </span>
        </Fixed>
    );
};

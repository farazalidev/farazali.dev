import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import type { HTMLAttributes } from 'react';
import React from 'react';

interface LogoProps extends HTMLAttributes<HTMLDivElement> {}

export const Logo: React.FC<LogoProps> = () => {
    const currenHost = headers().get('x-host');
    return (
        <Link className='flex justify-center place-items-center gap-4' href={currenHost || ''}>
            <Image alt='logo' height={35} loading='lazy' src='/logo.png' width={35} />
            <h1 className='text-primary text-xl md:text-2xl font-bold'>Faraz Ali</h1>
        </Link>
    );
};

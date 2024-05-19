'use client';
import { cn } from '@repo/ui/utils';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import React from 'react';

interface NavLinkProps {
    children: React.ReactNode;
    href: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ children, href }) => {
    const segment = useSelectedLayoutSegment();

    const active = href === `/${segment}`;

    return (
        <Link
            className={cn(
                'text-primary-text hover:text-primary transition-colors duration-200 mr-3',
                active ? 'underline text-primary' : '',
            )}
            href={href}
        >
            {children}
        </Link>
    );
};

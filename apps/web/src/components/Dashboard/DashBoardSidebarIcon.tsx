'use client';
import { cn } from '@repo/ui/utils';
import type { LinkProps } from 'next/link';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { HTMLAttributes, ReactNode } from 'react';

interface DashboardSidebarIconProps extends LinkProps, HTMLAttributes<HTMLAnchorElement> {
    Icon: ReactNode;
    label: string;
}

export const DashboardSidebarIcon: React.FC<DashboardSidebarIconProps> = ({ Icon, label, href, className, ...props }) => {
    const path = usePathname();

    const active = href === path;

    return (
        <Link
            className={cn(
                'flex px-2 place-items-center bg-secondary-border text-primary-text rounded-full py-2 gap-2 cursor-pointer',
                'hover:text-primary-text overflow-hidden hover:bg-primary transition-all duration-300',
                active ? 'bg-primary' : '',
                className,
            )}
            href={href}
            {...props}
        >
            {Icon}
            <span>{label}</span>
        </Link>
    );
};

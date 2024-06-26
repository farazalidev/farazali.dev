import React from 'react';
import Link from 'next/link';
import { Typography } from '@repo/ui/components';
import { Logo } from '../Misc/Logo';
import { footerData } from './footerLinks.data';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className='text-center'>
            <div className='common_section rounded-full h-fit text-primary-text flex justify-between mt-4'>
                <Logo />
                <div className='flex place-items-center justify-between gap-2'>
                    {footerData.map((data, _i) => {
                        return (
                            <Link href={data.location} key={data.label} title={data.label}>
                                <span>
                                    <data.Icon size={22} />
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
            <Typography as='p' className='m-1' intent='ghost'>
                <Link href='https://www.figma.com/file/QnWfAn8wwMumnkLjCBLpwV/2024-Portfolios-(Community)?type=design&node-id=0-1&mode=design&t=iYLmONmJHDE0psZt-0'>
                    Design inspiration by @Zainab Nisa
                </Link>
            </Typography>
        </footer>
    );
};

interface CustomLinkProps {
    href: string;
    label: string;
}

export const CustomLink: React.FC<CustomLinkProps> = ({ href, label }) => {
    return <Link href={href}>{label}</Link>;
};

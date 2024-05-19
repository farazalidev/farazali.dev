/* eslint-disable react/no-unescaped-entities -- i want to use quote */
import { Button, Title, Typography } from '@repo/ui/components';
import { cn } from '@repo/ui/utils';
import Image from 'next/image';
import type { HTMLAttributes } from 'react';
import React from 'react';
import { IoCopyOutline } from 'react-icons/io5';
import { AiOutlinePlus } from 'react-icons/ai';

interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
    return (
        <section
            className={cn([
                'text-primary-text common_section min-h-fit rounded-xl',
                'flex flex-col justify-between place-items-center md:flex-row',
            ])}
        >
            <div className='flex flex-col justify-center gap-10'>
                <div>
                    <Title className='md:hidden'>Available for work</Title>

                    <Typography as='p' intent='ghost'>
                        Full Stack Developer
                    </Typography>
                </div>

                <ProfileImage className='md:hidden' />

                <div className='flex flex-col gap-3'>
                    <Typography as='p'>I'am Faraz Ali</Typography>
                    <Typography as='p' intent='ghost'>
                        I speak the languages of the web. Fluently.
                    </Typography>

                    <div className='flex place-items-center gap-3'>
                        <Button Icon={<AiOutlinePlus />} intent='primary'>
                            Hire Me
                        </Button>
                        <Button Icon={<IoCopyOutline />} intent='secondary'>
                            Copy Email
                        </Button>
                    </div>
                </div>
            </div>

            <div className='flex-col justify-center hidden md:block'>
                <Title>Available</Title>
                <ProfileImage />
            </div>
        </section>
    );
};

interface ProfileImageProps extends HTMLAttributes<HTMLDivElement> {}

export const ProfileImage: React.FC<ProfileImageProps> = ({ className, ...props }) => {
    return (
        <div className={cn('w-44 h-44 rounded-full border-secondary border-[3px] relative overflow-hidden', className)} {...props}>
            <Image alt='Profile' fill loading='lazy' src='/profile.jpg' />
        </div>
    );
};

import { Title, Typography } from '@repo/ui/components';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectProps {
    link: string;
    name: string;
    type: string;
    thumbnail: string;
    index: number;
}

export const Project: React.FC<ProjectProps> = ({ link, name, thumbnail, type, index }) => {
    return (
        <div className='common_section rounded-xl h-fit min-h-[350px]'>
            <Title>Project #{index + 1}</Title>
            <div className='h-full flex flex-col gap-5'>
                <div className='flex justify-between place-items-center'>
                    <Link href={link}>
                        <Typography as='p' className='hover:text-primary'>
                            {name}
                        </Typography>
                        <Typography as='p' intent='ghost'>
                            {type}
                        </Typography>
                    </Link>
                    <Link href={link}>
                        <FaExternalLinkAlt className='text-primary' size={20} />
                    </Link>
                </div>

                <div className='h-[200px] relative rounded-2xl overflow-hidden border-[2px] border-secondary-border'>
                    <Image alt='whatsapp clone' className='object-cover' fill loading='lazy' src={thumbnail} />
                </div>
            </div>
        </div>
    );
};

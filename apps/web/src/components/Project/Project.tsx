import { Status, Typography } from '@repo/ui/components';
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
        <div className='common_section rounded-xl h-fit'>
            <Status>Project #{index + 1}</Status>
            <div className='h-full flex flex-col gap-5'>
                <div className='flex justify-between place-items-center'>
                    <Link href={link}>
                        <Typography as='p' className='hover:text-primary' size='lg'>
                            {name}
                        </Typography>
                        <Typography as='p' intent='ghost' size='sm'>
                            {type}
                        </Typography>
                    </Link>
                    <FaExternalLinkAlt className='text-primary' size={20} />
                </div>

                <div className='h-[200px] relative rounded-2xl overflow-hidden border-[2px] border-secondary-border'>
                    <Image alt='whatsapp clone' fill objectFit='cover' src={thumbnail} />
                </div>
            </div>
        </div>
    );
};

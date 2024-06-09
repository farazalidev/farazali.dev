'use client';
import { Button } from '@repo/ui/components';
import type { HTMLAttributes } from 'react';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

interface HireMeButtonProps extends HTMLAttributes<HTMLDivElement> {}

export const HireMeButton: React.FC<HireMeButtonProps> = () => {
    const handleHireMe = (): void => {
        window.open('https://linkedin.com/in/farazalidev');
    };
    return (
        <Button Icon={<AiOutlinePlus />} intent='primary' onClick={handleHireMe}>
            Hire Me
        </Button>
    );
};

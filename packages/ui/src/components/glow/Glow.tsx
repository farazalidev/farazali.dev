'use client';
import type { HTMLAttributes } from 'react';
import React from 'react';

interface GlowProps extends HTMLAttributes<HTMLDivElement> {}

export const Glow: React.FC<GlowProps> = () => {
    return <div className='absolute top-0 right-10 bg-red-700 w-[300px] h-[300px] glow' id='glow' />;
};

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import React from 'react';
import { cn } from '../../utils';

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';

type TypographyProps = {
    children: React.ReactNode;
    as: TypographyVariant;
    className?: string;
    italic?: boolean;
} & VariantProps<typeof TypographyVariants>;

const TypographyVariants = cva('text-primary-text', {
    variants: {
        size: {
            sm: 'text-sm',
            md: 'text-[16px] leading-[1.25rem]',
            lg: 'text-lg',
            xl: 'text-xl',
            '2xl': 'text-2xl',
        },
        weight: {
            light: 'font-light',
            'extra-light': 'font-extralight',
            regular: 'font-normal',
            bold: 'font-bold',
            'extra-bold': 'font-extrabold',
        },
        intent: {
            normal: '',
            ghost: 'text-opacity-80',
            'ghost-xl': 'text-opacity-50',
        },
    },
    defaultVariants: {
        size: 'md',
        weight: 'regular',
        intent: 'normal',
    },
});

export const Typography: React.FC<TypographyProps> = ({ children, as: Tag = 'span', className, italic, size, intent, weight }) => {
    return <Tag className={cn(TypographyVariants({ size, intent, weight, className }), italic ? 'italic' : '')}>{children}</Tag>;
};

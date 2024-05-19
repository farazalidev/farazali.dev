import type { HTMLAttributes } from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { Typography } from '../Typography/Typography';
import { cn } from '../../utils';

interface StatusProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof StatusVariants> {}

const StatusVariants = cva('rounded-full h-1 w-1', {
    variants: {
        statusColor: {
            green: 'bg-green-600 ',
            primary: 'bg-primary',
            gray: 'bg-gray-400',
        },
    },
    defaultVariants: {
        statusColor: 'green',
    },
});

export const Title: React.FC<StatusProps> = ({ children, statusColor, className, ...props }) => {
    return (
        <div
            className={cn(
                'rounded-full flex gap-2 place-items-center px-3 border-[3px] bg-black border-secondary-border bg-opacity-70 max-w-fit mb-1',
                className,
            )}
            {...props}
        >
            <span className={cn(StatusVariants({ statusColor }))} />
            <Typography as='span' className='max-w-fit'>
                {children}
            </Typography>
        </div>
    );
};

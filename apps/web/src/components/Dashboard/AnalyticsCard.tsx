import { Typography } from '@repo/ui/components';
import { cn } from '@repo/ui/utils';
import type { HTMLAttributes, ReactNode } from 'react';

interface AnalyticsCardProps extends HTMLAttributes<HTMLDivElement> {
    Icon: ReactNode;
    label: string;
    count: number;
}

export const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ className, ...props }) => {
    return (
        <div
            {...props}
            className={cn(
                'text-primary-text bg-secondary-border border-primary border-[1px] rounded-xl px2 py-4 flex flex-col gap-2 justify-center place-items-center min-w-[200px] min-h-[150px]',
                className,
            )}
        >
            {props.Icon}
            <Typography as='p' size='2xl' weight='bold'>
                {props.count}
            </Typography>
            <Typography as='p' intent='ghost-xl' size='sm'>
                {props.label}
            </Typography>
        </div>
    );
};

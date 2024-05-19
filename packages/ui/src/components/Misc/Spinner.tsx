import type { HTMLAttributes } from 'react';
import React from 'react';
import { PiSpinnerGap } from 'react-icons/pi';
import { Typography } from '../Typography/Typography';
import { cn } from '../../utils/cn';

interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ className, ...props }) => {
    return (
        <div className={cn(className)} {...props}>
            <span className='animate-spin'>
                <PiSpinnerGap className='text-primary-text' size={25} />
            </span>
            {props.title ? <Typography as='p'>{props.title}</Typography> : null}
        </div>
    );
};

/* eslint-disable no-nested-ternary -- nested turnery is required*/
import type { HTMLAttributes, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonCVA> {
    Icon?: ReactNode;
}

const buttonCVA = cva('flex text-primary-text text-sm md:text-lg py-1 text-nowrap', {
    variants: {
        intent: {
            primary: 'bg-primary border-gray-100',
            secondary: 'bg-secondary border-secondary-border',
        },
        size: {
            small: 'px-grf-3 py-gr-2',
            medium: 'px-grf-4 py-gr-2',
            large: 'px-grf-5 py-gr-3',
        },
    },
    compoundVariants: [],
    defaultVariants: {},
});

export const Button: React.FC<ButtonProps> = ({ children, intent = 'primary', size = 'medium', Icon, className, ...props }) => {
    return (
        <button
            className={cn(
                'flex border-[3px] rounded-md cursor-pointer',
                intent === 'primary' ? 'border-secondary-border' : intent === 'secondary' ? 'border-secondary-border ' : '',
            )}
            type='button'
            {...props}
        >
            <div className='flex'>
                <span className={cn(buttonCVA({ size, intent }), className, Icon ? 'rounded-l-sm' : 'rounded-sm')}>{children}</span>
                {Icon ? (
                    <span
                        className={cn(
                            buttonCVA({ intent, size }),
                            'border-l-[3px] px-1 rounded-r-sm flex justify-center place-items-center',
                            intent === 'primary' ? 'border-secondary-border' : 'border-secondary-border',
                        )}
                    >
                        {Icon}
                    </span>
                ) : null}
            </div>
        </button>
    );
};

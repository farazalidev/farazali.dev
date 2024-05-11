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
        <button className={cn('flex rounded-md cursor-pointer border-[2px] border-white rounded-full')} type='button' {...props}>
            <div className='flex'>
                <span className={cn(buttonCVA({ size, intent }), className, 'rounded-l-full')}>{children}</span>
                {Icon ? (
                    <span
                        className={cn(
                            buttonCVA({ intent, size }),
                            'px-1 rounded-r-full flex justify-center place-items-center',
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

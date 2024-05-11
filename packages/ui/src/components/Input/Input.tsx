import type { ReactNode } from 'react';
import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils';

interface InputWithLabel {
    isLabel: true;
    label: string;
    id: string;
}
interface InputWithoutLabel {
    isLabel: false;
}

interface WithIconProps {
    inputType: 'withIcon';
    Icon: ReactNode;
    iconsPosition: 'left' | 'right';
    onIconClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface WithoutIconProps {
    inputType: 'withoutIcon';
}

type ConditionalLabel = InputWithLabel | InputWithoutLabel;
type ConditionalIconProps = WithIconProps | WithoutIconProps;

type InputProps = VariantProps<typeof InputVariants> &
    ConditionalLabel &
    ConditionalIconProps &
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const InputVariants = cva('rounded-full text-primary-text ', {
    variants: {
        intent: {
            normal: '',
            ghost: 'bg-opacity-70 text-opacity-70',
            'ghost-xl': 'bg-opacity-50 text-opacity-50',
        },
        dimensions: {
            sm: 'px-2 py-1',
            md: 'px-3 py-2',
            xl: 'px-4 py-3',
            '2xl': 'px-6 py-4',
        },
    },
});

export const Input: React.FC<InputProps> = ({ className, intent = 'normal', dimensions = 'md', id, ...props }) => {
    return (
        <form className={cn('relative bg-secondary-border h-fit w-fit rounded-full flex place-items-center')}>
            {props.isLabel ? <label htmlFor={id}>{props.label}</label> : null}
            <input
                className={cn(
                    InputVariants({ intent, dimensions, className }),
                    'outline-secondary-border w-full h-full bg-secondary_bg border-[2px] border-primary',
                    // eslint-disable-next-line no-nested-ternary -- i want to use it
                    props.inputType === 'withIcon' ? (props.iconsPosition === 'left' ? 'pl-12' : 'pr-12') : '',
                )}
                id={id}
                {...props}
            />
            {props.inputType === 'withIcon' ? (
                <button
                    className={cn('absolute z-10 text-primary', props.iconsPosition === 'left' ? 'left-4' : 'right-4')}
                    onClick={props.onIconClick}
                    type='submit'
                >
                    {props.Icon}
                </button>
            ) : null}
        </form>
    );
};

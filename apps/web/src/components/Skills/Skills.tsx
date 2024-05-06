import { Status } from '@repo/ui/components';
import { cn } from '@repo/ui/utils';
import type { HTMLAttributes } from 'react';

interface SkillsProps extends HTMLAttributes<HTMLDivElement> {}

export const Skills: React.FC<SkillsProps> = ({ className, ...props }) => {
    return (
        <div className={cn('common_section rounded-xl text-primary-text', className)} {...props}>
            <Status>Skills</Status>
        </div>
    );
};

import { Typography } from '@repo/ui/components';
import { cn } from '@repo/ui/utils';
import type { HTMLAttributes } from 'react';
import type { Category } from '../../lib/sanity/article';

interface CategoryTagProps extends HTMLAttributes<HTMLDivElement> {
    tag: Category;
}

export const CategoryTag: React.FC<CategoryTagProps> = ({ tag, className, ...props }) => {
    return tag.count && tag.count > 0 ? (
        <div
            className={cn(
                'border-[1px] hover:bg-primary hover:text-primary-text cursor-pointer border-primary rounded-full px-2 py-1 gap-2 w-fit flex place-items-center',
                className,
            )}
            {...props}
        >
            <Typography as='span'>{tag.title.length < 8 ? tag.title : `${tag.title.slice(0, 7)}...`}</Typography>
            <Typography as='span' intent='ghost'>
                {tag.count}
            </Typography>
        </div>
    ) : null;
};

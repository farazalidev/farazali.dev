'use client';
import { Spinner } from '@repo/ui/components';
import { cn } from '@repo/ui/utils';
import type { HTMLAttributes } from 'react';
import React, { useState } from 'react';
import { Utterances } from 'react-utterances-client';

interface CommentsProps extends HTMLAttributes<HTMLDivElement> {}

export const Comments: React.FC<CommentsProps> = ({ ...props }) => {
    const [isLoadingFinished, setIsLoadingFinished] = useState(false);

    const handleLoadingFinish = (): void => {
        setIsLoadingFinished(true);
    };

    return (
        <div {...props}>
            <Spinner className={cn(isLoadingFinished ? 'hidden' : 'block')} title='Loading comments...' />
            <div className={cn(isLoadingFinished ? 'visible' : 'invisible')}>
                <Utterances
                    issueTerm='pathname'
                    label='Comments'
                    loading='lazy'
                    onLoad={handleLoadingFinish}
                    placeholder={<Spinner title='Loading comments...' />}
                    repo='farazalidev/farazali.dev'
                    theme='github-dark'
                />
            </div>
        </div>
    );
};

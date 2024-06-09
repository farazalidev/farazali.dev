'use client';
import { Button } from '@repo/ui/components';
import type { HTMLAttributes } from 'react';
import React, { useEffect, useState } from 'react';
import { IoCopyOutline } from 'react-icons/io5';
import { MdDone } from 'react-icons/md';
import { toast } from 'sonner';

interface EmailCopyButtonProps extends HTMLAttributes<HTMLDivElement> {}

export const EmailCopyButton: React.FC<EmailCopyButtonProps> = () => {
    const [emailTimeOut, setEmailTimeOut] = useState<NodeJS.Timeout | null>(null);
    const [isEmailCopied, setIsEmailCopied] = useState(false);
    const handleEmailCopy = (): void => {
        navigator.clipboard
            .writeText('farazalidev@gmail.com')
            .then(() => {
                setIsEmailCopied(true);
            })
            .catch(() => {
                toast.error('Failed to copy email', { position: 'top-left', richColors: true, invert: true });
            });
    };

    useEffect(() => {
        if (isEmailCopied) {
            const currentEmailTimeOut = setTimeout(() => {
                setIsEmailCopied(false);
            }, 3000);
            setEmailTimeOut(currentEmailTimeOut);
        }
        return () => {
            if (emailTimeOut) {
                clearTimeout(emailTimeOut);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps -- ii will checks it infinitely
    }, [isEmailCopied]);
    return (
        <Button Icon={isEmailCopied ? <MdDone /> : <IoCopyOutline />} intent='secondary' onClick={handleEmailCopy}>
            {isEmailCopied ? 'Copied' : 'Copy Email'}
        </Button>
    );
};

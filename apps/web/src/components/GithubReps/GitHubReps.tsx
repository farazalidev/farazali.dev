/* eslint-disable @typescript-eslint/no-explicit-any -- unknown API schema*/
/* eslint-disable @typescript-eslint/no-unsafe-member-access -- unknown API schema */
/* eslint-disable @typescript-eslint/no-unsafe-assignment -- unknown API schema*/
'use client';
import { Title, Typography } from '@repo/ui/components';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface GitHubRepsProps {}

interface GitHubReposFetchState {
    data: any[];
    isLoading: boolean;
    isError: boolean;
}

export const GitHubReps: React.FC<GitHubRepsProps> = () => {
    const [fetchState, setFetchState] = useState<GitHubReposFetchState>({ data: [], isError: false, isLoading: false });

    useEffect(() => {
        const fetchRepos = async (): Promise<void> => {
            try {
                const response = await fetch('/api/git-repos', { method: 'GET' });

                const data = await response.json();

                setFetchState((prev) => {
                    return { ...prev, data };
                });
            } catch (error) {
                setFetchState((prev) => {
                    return { ...prev, isError: true };
                });
            } finally {
                setFetchState((prev) => {
                    return { ...prev, isLoading: false };
                });
            }
        };

        void fetchRepos();
    }, []);

    return (
        <div className='common_section min-h-fit rounded-xl'>
            <Title>Recent Github repos</Title>
            <div className='flex flex-col gap-3 justify-center mt-4'>
                {fetchState.data.slice(0, 4).map((repo) => {
                    return <Repo createdAt={repo?.created_at} key={repo.name} name={repo?.name} starsCount={repo?.stargazers_count} />;
                })}
            </div>
        </div>
    );
};

interface RepoProps {
    name: string;
    createdAt: string;
    starsCount: number;
}

export const Repo: React.FC<RepoProps> = ({ name, createdAt, starsCount }) => {
    return (
        <div className='flex justify-between place-items-center px-4'>
            <div className='flex flex-col'>
                <Typography as='p' className='hover:text-primary'>
                    {name}
                </Typography>
                <Typography as='p' intent='ghost'>
                    {new Date(createdAt).toISOString().substring(0, 10)}
                </Typography>
            </div>
            <div className='flex gap-2 place-items-center'>
                <Typography as='p' intent='ghost'>
                    {starsCount}
                </Typography>
                <FaStar className='text-primary-text' />
            </div>
        </div>
    );
};

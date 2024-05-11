'use client';
import React from 'react';
import { PiUserSquare } from 'react-icons/pi';
import { AiFillLike, AiOutlineAreaChart } from 'react-icons/ai';
import { MdArticle } from 'react-icons/md';
import { AnalyticsCard, UsersDevicePieChart, Chart } from '@components';

interface AnalyticsPageProps {}

const AnalyticsPage: React.FC<AnalyticsPageProps> = () => {
    return (
        <div className='flex flex-col gap-4 place-items-center justify-center'>
            <div className='flex gap-4 place-items-center'>
                <AnalyticsCard Icon={<PiUserSquare size={25} />} count={2500} label='Users' />
                <AnalyticsCard Icon={<AiOutlineAreaChart size={25} />} count={45000} label='Reach' />
                <AnalyticsCard Icon={<MdArticle size={25} />} count={45} label='Posts' />
                <AnalyticsCard Icon={<AiFillLike size={25} />} count={45000} label='Likes' />
            </div>
            <div className='w-fit h-full flex gap-4 place-items-center'>
                <Chart />
                <UsersDevicePieChart />
            </div>
        </div>
    );
};

export default AnalyticsPage;

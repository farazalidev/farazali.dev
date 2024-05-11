import { Input } from '@repo/ui/components';
import type { ChangeEvent, HTMLAttributes } from 'react';
import React from 'react';
import { FaPlusCircle, FaSearch } from 'react-icons/fa';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { MdFirstPage, MdLastPage } from 'react-icons/md';
import type { Table } from '@tanstack/react-table';
import type { Post } from '../../@types';

interface PostsDataHeaderProps extends HTMLAttributes<HTMLDivElement> {
    table: Table<Post>;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

export const PostsDataHeader: React.FC<PostsDataHeaderProps> = ({ table, onChange, value, ...props }) => {
    return (
        <div className='common_section w-full rounded-xl flex justify-between place-items-center' {...props}>
            <div className='flex place-items-center' title='create new post'>
                <button className='text-primary' type='button'>
                    <FaPlusCircle size={25} />
                </button>
            </div>
            <Input
                Icon={<FaSearch size={18} />}
                iconsPosition='right'
                inputType='withIcon'
                isLabel={false}
                onChange={onChange}
                placeholder='search post'
                value={value}
            />

            <div className='flex place-items-center gap-2'>
                <button
                    className='bg-secondary-border text-white rounded-full p-2 h-fit w-fit disabled:bg-opacity-30 disabled:cursor-not-allowed'
                    disabled={!table.getCanPreviousPage()}
                    onClick={() => {
                        table.setPageIndex(0);
                    }}
                    type='button'
                >
                    <MdFirstPage size={22} title='first page' />
                </button>
                <button
                    className='bg-secondary-border text-white rounded-full p-2 h-fit w-fit disabled:bg-opacity-30 disabled:cursor-not-allowed'
                    disabled={!table.getCanPreviousPage()}
                    onClick={() => {
                        table.previousPage();
                    }}
                    type='button'
                >
                    <GrFormPrevious size={22} title='prev page' />
                </button>
                <button
                    className='bg-secondary-border text-white rounded-full p-2 h-fit w-fit disabled:bg-opacity-30 disabled:cursor-not-allowed'
                    disabled={!table.getCanNextPage()}
                    onClick={() => {
                        table.nextPage();
                    }}
                    type='button'
                >
                    <GrFormNext size={22} title='next page' />
                </button>
                <button
                    className='bg-secondary-border text-white rounded-full p-2 h-fit w-fit disabled:bg-opacity-30 disabled:cursor-not-allowed'
                    disabled={!table.getCanNextPage()}
                    onClick={() => {
                        table.setPageIndex(table.getPageCount() - 1);
                    }}
                    type='button'
                >
                    <MdLastPage size={22} title='last page' />
                </button>
            </div>
        </div>
    );
};

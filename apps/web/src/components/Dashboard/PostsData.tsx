'use client';
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import type { HTMLAttributes } from 'react';
import React, { useMemo, useState } from 'react';
import { Input } from '@repo/ui/components';
import { FaSearch } from 'react-icons/fa';
import { MdFirstPage, MdLastPage } from 'react-icons/md';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { posts, PostColumns } from './DummyData';

interface PostsDataProps extends HTMLAttributes<HTMLDivElement> {}

export const PostsData: React.FC<PostsDataProps> = ({ ...props }) => {
    const [filtering, setFiltering] = useState<string>('');

    const data = useMemo(() => posts, []);

    const table = useReactTable({
        data,
        columns: PostColumns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            globalFilter: filtering,
        },
        onGlobalFilterChange: setFiltering,
    });

    return (
        <div className='w-full h-full flex flex-col gap-4' {...props}>
            <div className='common_section w-full rounded-xl flex justify-between place-items-center'>
                <Input
                    Icon={<FaSearch size={18} />}
                    iconsPosition='right'
                    inputType='withIcon'
                    isLabel={false}
                    onChange={(e) => {
                        e.preventDefault();
                        setFiltering(e.target.value);
                    }}
                    placeholder='search post'
                    value={filtering}
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
            <div className='h-fit overflow-auto w-full'>
                <table className=''>
                    <thead>
                        {table.getHeaderGroups().map((headerGroup) => {
                            return (
                                <tr className='w-fit text-nowrap' key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <th className='w-fit text-nowrap' colSpan={header.colSpan} key={header.id}>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(header.column.columnDef.header, header.getContext())}
                                            </th>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map((rowModel) => {
                            return (
                                <tr className='w-fit text-nowrap' key={rowModel.id}>
                                    {rowModel.getVisibleCells().map((cell) => {
                                        return <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>;
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

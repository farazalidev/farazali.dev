'use client';
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import type { HTMLAttributes } from 'react';
import React, { useMemo, useState } from 'react';
import { PostsDataHeader } from '../Header/PostsDataHeader';
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
            <PostsDataHeader
                onChange={(e) => {
                    e.preventDefault();
                    setFiltering(e.target.value);
                }}
                table={table}
                value={filtering}
            />
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

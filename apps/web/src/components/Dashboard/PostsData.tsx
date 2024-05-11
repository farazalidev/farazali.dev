'use client';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import type { HTMLAttributes } from 'react';
import React, { useMemo } from 'react';
import { posts, PostColumns } from './DummyData';

interface PostsDataProps extends HTMLAttributes<HTMLDivElement> {}

export const PostsData: React.FC<PostsDataProps> = ({ ...props }) => {
    const data = useMemo(() => posts, []);

    const table = useReactTable({
        data,
        columns: PostColumns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className='w-full h-full flex flex-col gap-4' {...props}>
            <div className='common_section w-full rounded-xl'>Data header</div>
            <div className='h-[500px] overflow-scroll w-full'>
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

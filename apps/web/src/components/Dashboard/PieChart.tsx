/* eslint-disable @typescript-eslint/no-explicit-any -- dummy data*/
/* eslint-disable @typescript-eslint/explicit-function-return-type -- dummy data*/
/* eslint-disable @typescript-eslint/no-unsafe-assignment -- dummy data*/
'use client';
import React from 'react';
import { Pie, Cell, PieChart } from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any): React.JSX.Element => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text dominantBaseline='central' fill='white' textAnchor={x > cx ? 'start' : 'end'} x={x} y={y}>
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export const UsersDevicePieChart = () => {
    return (
        <PieChart height={400} width={400}>
            <Pie
                cx='50%'
                cy='50%'
                data={data}
                dataKey='value'
                fill='#8884d8'
                isAnimationActive={false}
                label={renderCustomizedLabel}
                labelLine={false}
                outerRadius={150}
            >
                {data.map((_entry, index) => (
                    <Cell fill={COLORS[index % COLORS.length]} key={`cell-${index}`} />
                ))}
            </Pie>
        </PieChart>
    );
};
